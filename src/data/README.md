# Team Data Configuration

This directory contains data files for the AI (Wong) Lab website.

## Adding Team Members

Edit `team.ts` to add or update team members. The file is well-documented with examples.

### Quick Start

1. **Add a photo**: Place team member photos in `/public/images/team/`
   - Example: `/public/images/team/wong.jpg`

2. **Edit `team.ts`**: Add team member to the appropriate array:
   - `teamMembers` - Principal Investigator and core faculty
   - `students` - Graduate students, postdocs, research staff
   - `collaborators` - External collaborators
   - `alumni` - Former lab members

3. **Example**:
```typescript
{
  name: "Jane Doe, PhD",
  role: "Postdoctoral Fellow",
  bio: "Dr. Doe's research focuses on...",
  credentials: "PhD",
  image: "/images/team/doe.jpg",
  email: "jane.doe@institution.edu", // Optional
  googleScholar: "https://scholar.google.com/...", // Optional
}
```

4. **Build and preview**:
```bash
npm run dev
```

The Team section will automatically update to display all team members with appropriate layouts based on their category.

## Features

- **Automatic layouts**: Different layouts for faculty, students, and collaborators
- **Contact links**: Optional email, Google Scholar, website, Twitter, LinkedIn
- **Responsive design**: Optimized for all screen sizes
- **Easy maintenance**: Just edit one file to update the entire team section
