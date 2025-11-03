/**
 * Import publications from Google Scholar BibTeX export
 *
 * How to use:
 * 1. Go to https://scholar.google.com/citations?user=HMyXWb4AAAAJ
 * 2. Click "Export" and select all publications
 * 3. Choose "BibTeX" format
 * 4. Save as publications.bib in this directory
 * 5. Run: node scripts/import-publications.js
 */

const fs = require('fs');
const path = require('path');

function parseBibTeX(bibtex) {
  const entries = [];
  const entryRegex = /@(\w+)\{([^,]+),\s*([\s\S]*?)\n\}/g;

  let match;
  while ((match = entryRegex.exec(bibtex)) !== null) {
    const [, type, key, content] = match;
    const entry = { type, key };

    // Parse fields
    const fieldRegex = /(\w+)=\{([^}]+)\}/g;
    let fieldMatch;
    while ((fieldMatch = fieldRegex.exec(content)) !== null) {
      const [, fieldName, fieldValue] = fieldMatch;
      entry[fieldName] = fieldValue.trim();
    }

    entries.push(entry);
  }

  return entries;
}

function formatAuthors(authors) {
  if (!authors) return '';
  // Handle "and" separated authors
  const authorList = authors.split(' and ');
  return authorList.join(', ');
}

function generatePublicationsList(entries) {
  // Group by year
  const byYear = {};

  entries.forEach(entry => {
    const year = entry.year || 'Unknown';
    if (!byYear[year]) byYear[year] = [];
    byYear[year].push(entry);
  });

  // Sort years descending
  const years = Object.keys(byYear).sort((a, b) => b - a);

  let output = '# Publications (Generated from Google Scholar)\n\n';
  output += `Last updated: ${new Date().toISOString().split('T')[0]}\n\n`;

  years.forEach(year => {
    output += `## ${year}\n\n`;
    byYear[year].forEach((entry, index) => {
      output += `${index + 1}. **${entry.title}**\n`;
      output += `   - Authors: ${formatAuthors(entry.author)}\n`;
      if (entry.journal) output += `   - Journal: ${entry.journal}\n`;
      if (entry.booktitle) output += `   - Conference: ${entry.booktitle}\n`;
      if (entry.volume) output += `   - Volume: ${entry.volume}\n`;
      if (entry.pages) output += `   - Pages: ${entry.pages}\n`;
      if (entry.url) output += `   - URL: ${entry.url}\n`;
      output += '\n';
    });
  });

  return output;
}

function main() {
  const bibtexPath = path.join(__dirname, 'publications.bib');

  if (!fs.existsSync(bibtexPath)) {
    console.error('Error: publications.bib not found!');
    console.log('\nTo use this script:');
    console.log('1. Go to https://scholar.google.com/citations?user=HMyXWb4AAAAJ');
    console.log('2. Click "Export" and select all publications');
    console.log('3. Choose "BibTeX" format and save as scripts/publications.bib');
    console.log('4. Run this script again: node scripts/import-publications.js');
    process.exit(1);
  }

  try {
    const bibtex = fs.readFileSync(bibtexPath, 'utf8');
    const entries = parseBibTeX(bibtex);

    console.log(`Parsed ${entries.length} publications`);

    const markdown = generatePublicationsList(entries);
    const outputPath = path.join(__dirname, 'publications-output.md');
    fs.writeFileSync(outputPath, markdown);

    console.log(`\nPublications list generated: ${outputPath}`);
    console.log('\nNext steps:');
    console.log('- Review the generated list');
    console.log('- Manually update src/pages/publications.astro with the new content');
    console.log('- Or use this as reference to update src/data/publications.ts');

  } catch (error) {
    console.error('Error processing BibTeX:', error.message);
    process.exit(1);
  }
}

main();
