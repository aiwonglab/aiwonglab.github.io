# Expected Output from Running the Scraper

## Running the Script

Since this environment has network restrictions, you'll need to run this on your local machine:

```bash
# 1. Clone the repository
git clone https://github.com/aiwonglab/aiwonglab.github.io.git
cd aiwonglab.github.io

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run the scraper
python scrape_scholar.py
```

## What You'll See

### Console Output
```
Scraping Google Scholar profile for user: HMyXWb4AAAAJ
Scraping page 1...
  Found XX publications on page 1
Scraping page 2...
  Found XX publications on page 2

Total publications scraped: XX

Publications saved to publications.json
Publications saved to publications.csv

================================================================================
PUBLICATION SUMMARY
================================================================================

Total Publications: XX

Publications by Year:
  2024: X
  2023: X
  2022: X
  2021: X
  ...

Total Citations: XXXX

Top 5 Most Cited Papers:

1. [Your Most Cited Paper Title]
   Year: XXXX, Citations: XXX

2. [Second Most Cited Paper]
   Year: XXXX, Citations: XXX

3. [Third Most Cited Paper]
   Year: XXXX, Citations: XXX

4. [Fourth Most Cited Paper]
   Year: XXXX, Citations: XXX

5. [Fifth Most Cited Paper]
   Year: XXXX, Citations: XXX
```

## Output Files Generated

### 1. publications.json
```json
[
  {
    "title": "Paper Title",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HMyXWb4AAAAJ&citation_for_view=...",
    "authors": "Author1, Author2, Author3",
    "venue": "Journal Name or Conference",
    "year": 2024,
    "citations": 42
  },
  {
    "title": "Another Paper",
    "link": "https://scholar.google.com/citations?...",
    "authors": "Author Names",
    "venue": "Publication Venue",
    "year": 2023,
    "citations": 15
  }
  // ... more publications
]
```

### 2. publications.csv
```
year,title,authors,venue,citations,link
2024,Paper Title,Author1; Author2,Journal Name,42,https://scholar.google.com/...
2023,Another Paper,Author Names,Conference,15,https://scholar.google.com/...
...
```

## Data Fields Extracted

For each publication, the scraper extracts:

- **title**: Full title of the publication
- **authors**: List of all authors
- **venue**: Journal name, conference, or other publication venue
- **year**: Publication year
- **citations**: Number of citations (according to Google Scholar)
- **link**: Direct link to the publication details on Google Scholar

## Using the Data

Once you have the CSV or JSON files, you can:

1. **Import into Excel/Google Sheets**: Open the CSV for analysis
2. **Create visualizations**: Plot publications and citations over time
3. **Generate CV sections**: Use the structured data for your CV/website
4. **Track impact**: Monitor citation counts over time
5. **Analyze collaborations**: See co-author patterns

## Notes

- The script respects Google Scholar's servers with a 2-second delay between pages
- All publications from your profile will be retrieved, regardless of count
- Data is sorted by year (newest first by default)
- The script includes your profile URL: https://scholar.google.com/citations?user=HMyXWb4AAAAJ&hl=en&oi=ao
