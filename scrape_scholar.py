#!/usr/bin/env python3
"""
Google Scholar Profile Scraper
Scrapes publication data from a Google Scholar profile and sorts by year.
"""

import requests
from bs4 import BeautifulSoup
import json
import csv
import time
from typing import List, Dict
import argparse
from urllib.parse import urljoin, parse_qs, urlparse


class ScholarScraper:
    def __init__(self, user_id: str):
        self.user_id = user_id
        self.base_url = "https://scholar.google.com/citations"
        self.session = requests.Session()
        # Use a user agent to avoid being blocked
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        self.publications = []

    def scrape_page(self, start_index: int = 0) -> tuple[List[Dict], bool]:
        """
        Scrape a single page of publications.
        Returns: (publications_list, has_more_pages)
        """
        params = {
            'user': self.user_id,
            'hl': 'en',
            'cstart': start_index,
            'pagesize': 100  # Maximum page size
        }

        try:
            response = self.session.get(self.base_url, params=params, timeout=10)
            response.raise_for_status()
        except requests.RequestException as e:
            print(f"Error fetching page: {e}")
            return [], False

        soup = BeautifulSoup(response.content, 'html.parser')
        publications = []

        # Find all publication entries
        pub_entries = soup.find_all('tr', class_='gsc_a_tr')

        for entry in pub_entries:
            try:
                pub_data = {}

                # Title and link
                title_elem = entry.find('a', class_='gsc_a_at')
                if title_elem:
                    pub_data['title'] = title_elem.text.strip()
                    pub_data['link'] = urljoin(self.base_url, title_elem.get('href', ''))

                # Authors and venue
                authors_elem = entry.find('div', class_='gs_gray')
                if authors_elem:
                    pub_data['authors'] = authors_elem.text.strip()

                # Venue/Journal
                venue_elem = entry.find_all('div', class_='gs_gray')
                if len(venue_elem) > 1:
                    pub_data['venue'] = venue_elem[1].text.strip()

                # Year
                year_elem = entry.find('span', class_='gsc_a_h gsc_a_hc gs_ibl')
                if year_elem:
                    year_text = year_elem.text.strip()
                    try:
                        pub_data['year'] = int(year_text) if year_text else None
                    except ValueError:
                        pub_data['year'] = None

                # Citations
                citations_elem = entry.find('a', class_='gsc_a_ac gs_ibl')
                if citations_elem:
                    citations_text = citations_elem.text.strip()
                    try:
                        pub_data['citations'] = int(citations_text) if citations_text else 0
                    except ValueError:
                        pub_data['citations'] = 0
                else:
                    pub_data['citations'] = 0

                publications.append(pub_data)

            except Exception as e:
                print(f"Error parsing publication entry: {e}")
                continue

        # Check if there are more pages
        has_more = False
        next_button = soup.find('button', {'aria-label': 'Next'})
        if next_button and not next_button.get('disabled'):
            has_more = True

        return publications, has_more

    def scrape_all(self) -> List[Dict]:
        """Scrape all publications from the profile."""
        print(f"Scraping Google Scholar profile for user: {self.user_id}")

        start_index = 0
        page_num = 1

        while True:
            print(f"Scraping page {page_num}...")
            pubs, has_more = self.scrape_page(start_index)

            if not pubs:
                break

            self.publications.extend(pubs)
            print(f"  Found {len(pubs)} publications on page {page_num}")

            if not has_more:
                break

            start_index += 100
            page_num += 1

            # Be polite to the server
            time.sleep(2)

        print(f"\nTotal publications scraped: {len(self.publications)}")
        return self.publications

    def sort_by_year(self, reverse: bool = True) -> List[Dict]:
        """Sort publications by year (newest first by default)."""
        # Handle publications without year by putting them at the end
        self.publications.sort(
            key=lambda x: (x.get('year') is not None, x.get('year') or 0),
            reverse=reverse
        )
        return self.publications

    def save_to_json(self, filename: str = "publications.json"):
        """Save publications to JSON file."""
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(self.publications, f, indent=2, ensure_ascii=False)
        print(f"Publications saved to {filename}")

    def save_to_csv(self, filename: str = "publications.csv"):
        """Save publications to CSV file."""
        if not self.publications:
            print("No publications to save")
            return

        fieldnames = ['year', 'title', 'authors', 'venue', 'citations', 'link']

        with open(filename, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()

            for pub in self.publications:
                row = {field: pub.get(field, '') for field in fieldnames}
                writer.writerow(row)

        print(f"Publications saved to {filename}")

    def print_summary(self):
        """Print a summary of the publications."""
        if not self.publications:
            print("No publications found")
            return

        print("\n" + "="*80)
        print("PUBLICATION SUMMARY")
        print("="*80)

        # Count by year
        years = {}
        for pub in self.publications:
            year = pub.get('year', 'Unknown')
            years[year] = years.get(year, 0) + 1

        print(f"\nTotal Publications: {len(self.publications)}")
        print("\nPublications by Year:")
        for year in sorted(years.keys(), reverse=True):
            print(f"  {year}: {years[year]}")

        # Total citations
        total_citations = sum(pub.get('citations', 0) for pub in self.publications)
        print(f"\nTotal Citations: {total_citations}")

        # Most cited papers
        print("\nTop 5 Most Cited Papers:")
        sorted_by_citations = sorted(
            self.publications,
            key=lambda x: x.get('citations', 0),
            reverse=True
        )
        for i, pub in enumerate(sorted_by_citations[:5], 1):
            print(f"\n{i}. {pub.get('title', 'N/A')}")
            print(f"   Year: {pub.get('year', 'N/A')}, Citations: {pub.get('citations', 0)}")


def main():
    parser = argparse.ArgumentParser(
        description='Scrape publications from a Google Scholar profile'
    )
    parser.add_argument(
        '--user-id',
        default='HMyXWb4AAAAJ',
        help='Google Scholar user ID (default: HMyXWb4AAAAJ)'
    )
    parser.add_argument(
        '--output',
        default='publications',
        help='Output filename without extension (default: publications)'
    )
    parser.add_argument(
        '--format',
        choices=['json', 'csv', 'both'],
        default='both',
        help='Output format (default: both)'
    )
    parser.add_argument(
        '--sort',
        choices=['asc', 'desc'],
        default='desc',
        help='Sort order by year (default: desc - newest first)'
    )

    args = parser.parse_args()

    # Create scraper
    scraper = ScholarScraper(args.user_id)

    # Scrape all publications
    scraper.scrape_all()

    # Sort by year
    scraper.sort_by_year(reverse=(args.sort == 'desc'))

    # Save to files
    if args.format in ['json', 'both']:
        scraper.save_to_json(f"{args.output}.json")

    if args.format in ['csv', 'both']:
        scraper.save_to_csv(f"{args.output}.csv")

    # Print summary
    scraper.print_summary()


if __name__ == "__main__":
    main()
