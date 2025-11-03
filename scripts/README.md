# Publication Update Scripts

This directory contains tools to help update publications from Google Scholar.

## Quick Start: Manual BibTeX Import

**Recommended for most users** - Simple, reliable, and respects Google Scholar's terms of service.

### Steps:

1. **Export from Google Scholar**:
   - Go to https://scholar.google.com/citations?user=HMyXWb4AAAAJ
   - Click "Export" (or select specific papers)
   - Choose "BibTeX" format
   - Save as `scripts/publications.bib`

2. **Run the import script**:
   ```bash
   node scripts/import-publications.js
   ```

3. **Review and update**:
   - Check `scripts/publications-output.md`
   - Manually update your website with new publications

### Frequency:
Update whenever you have new publications (quarterly or as needed).

---

## Option 2: GitHub Actions (Advanced)

For automatic periodic updates using GitHub Actions.

### Setup:

1. **Create workflow file** (`.github/workflows/update-publications.yml`):
   ```yaml
   name: Update Publications

   on:
     schedule:
       - cron: '0 0 1 * *'  # Monthly on the 1st
     workflow_dispatch:  # Manual trigger

   jobs:
     update:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
         - name: Export BibTeX manually
           run: echo "Manual BibTeX export required"
         # Add your update logic here
   ```

2. **Limitations**:
   - Google Scholar doesn't have an official API
   - Automated scraping may violate their ToS
   - Requires manual BibTeX export or third-party tools

---

## Option 3: Python Scholarly Library (Use with Caution)

**⚠️ Warning**: May violate Google Scholar's Terms of Service. Use responsibly.

```python
# Example using scholarly library (not recommended for production)
from scholarly import scholarly

# Search for author
search_query = scholarly.search_author('A Ian Wong')
author = next(search_query)
author = scholarly.fill(author)

# Get publications
for pub in author['publications']:
    print(pub['bib']['title'])
```

**Issues**:
- Rate limiting
- IP blocking
- Against Google Scholar ToS
- Requires CAPTCHA solving

---

## Recommended Approach

**Use Manual BibTeX Import**:
- ✅ Simple and reliable
- ✅ Respects Google Scholar ToS
- ✅ Full control over what's published
- ✅ No rate limiting issues
- ✅ Review publications before going live

**Update frequency**: Quarterly or when you have new publications

---

## Alternative: ORCID Integration

If you have an ORCID profile, you could use their public API:

```bash
curl -H "Accept: application/json" \
  https://pub.orcid.org/v3.0/YOUR-ORCID-ID/works
```

ORCID has an official API and is designed for this use case.

---

## Questions?

For issues with the import script, check:
- BibTeX file formatting
- File path is correct
- Node.js is installed
