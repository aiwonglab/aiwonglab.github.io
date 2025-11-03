# Google Scholar Profile Scraper

A Python script to scrape publication data from Google Scholar profiles, sort by year, and export to JSON/CSV formats.

## Features

- Scrapes all publications from a Google Scholar profile
- Handles pagination automatically
- Extracts: title, authors, venue, year, citations, and link
- Sorts publications by year (newest or oldest first)
- Exports to JSON and/or CSV formats
- Displays summary statistics including:
  - Total publications and citations
  - Publications per year
  - Top cited papers

## Installation

```bash
# Install dependencies
pip install -r requirements.txt
```

## Usage

### Basic Usage (Your Profile)

```bash
python scrape_scholar.py
```

This will scrape the default profile (HMyXWb4AAAAJ) and save both JSON and CSV files.

### Custom Options

```bash
# Specify a different user ID
python scrape_scholar.py --user-id YOUR_USER_ID

# Choose output format
python scrape_scholar.py --format json    # JSON only
python scrape_scholar.py --format csv     # CSV only
python scrape_scholar.py --format both    # Both formats (default)

# Custom output filename
python scrape_scholar.py --output my_publications

# Sort order
python scrape_scholar.py --sort desc      # Newest first (default)
python scrape_scholar.py --sort asc       # Oldest first
```

### Complete Example

```bash
python scrape_scholar.py \
  --user-id HMyXWb4AAAAJ \
  --output my_pubs \
  --format both \
  --sort desc
```

## Output

The script generates:

1. **JSON file** (`publications.json`): Complete publication data in JSON format
2. **CSV file** (`publications.csv`): Spreadsheet-compatible format with columns:
   - year
   - title
   - authors
   - venue
   - citations
   - link

3. **Console summary**: Statistics about your publications including:
   - Total publication count
   - Publications by year
   - Total citations
   - Top 5 most cited papers

## Example Output

```
Scraping Google Scholar profile for user: HMyXWb4AAAAJ
Scraping page 1...
  Found 20 publications on page 1
Scraping page 2...
  Found 15 publications on page 2

Total publications scraped: 35

Publications saved to publications.json
Publications saved to publications.csv

================================================================================
PUBLICATION SUMMARY
================================================================================

Total Publications: 35

Publications by Year:
  2024: 5
  2023: 8
  2022: 7
  2021: 6
  ...

Total Citations: 1234

Top 5 Most Cited Papers:
1. Example Paper Title
   Year: 2020, Citations: 234
...
```

## Notes

- The script includes a 2-second delay between pages to be respectful to Google's servers
- Publications without years are sorted to the end when sorting by year
- The script uses a user agent to avoid being blocked

## Troubleshooting

If you encounter errors:

1. **Connection errors**: Check your internet connection
2. **Blocked requests**: Google may temporarily block automated requests. Wait a few minutes and try again
3. **Missing data**: Some publications may not have complete information (especially year or citation count)

## Finding Your User ID

Your user ID is in your Google Scholar profile URL:
```
https://scholar.google.com/citations?user=YOUR_USER_ID&hl=en
                                           ^^^^^^^^^^^^
```

For example, in `https://scholar.google.com/citations?user=HMyXWb4AAAAJ&hl=en`, the user ID is `HMyXWb4AAAAJ`.
