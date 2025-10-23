/**
 * Team Data Configuration
 *
 * Edit this file to add, remove, or update team members.
 * Images should be placed in /public/images/team/ directory.
 */

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  credentials?: string;
  image: string;
  email?: string;
  website?: string;
  twitter?: string;
  linkedin?: string;
  googleScholar?: string;
}

export interface Collaborator {
  name: string;
  affiliation: string;
  role?: string;
  website?: string;
}

// Principal Investigator and Core Team
export const teamMembers: TeamMember[] = [
  {
    name: "A. Ian Wong, MD, PhD",
    role: "Principal Investigator",
    bio: "Dr. Wong leads research at the intersection of artificial intelligence and critical care medicine. His work focuses on developing clinically-validated AI tools for acute care settings, with emphasis on health equity and bias in medical devices.",
    credentials: "MD, PhD",
    image: "/images/team/wong.jpg", // Add your photo to /public/images/team/
    email: "your.email@institution.edu", // Optional: add your contact
    googleScholar: "https://scholar.google.com/your-profile", // Optional
    // twitter: "https://twitter.com/yourhandle", // Optional
    // linkedin: "https://linkedin.com/in/yourprofile", // Optional
  },
  // Add more team members here:
  // {
  //   name: "Jane Doe, PhD",
  //   role: "Postdoctoral Fellow",
  //   bio: "Dr. Doe's research focuses on...",
  //   credentials: "PhD",
  //   image: "/images/team/doe.jpg",
  //   email: "jane.doe@institution.edu",
  // },
];

// Research Assistants, Graduate Students, etc.
export const students: TeamMember[] = [
  // Add students/research assistants here:
  // {
  //   name: "John Smith",
  //   role: "PhD Candidate",
  //   bio: "John is working on...",
  //   image: "/images/team/smith.jpg",
  // },
];

// Collaborators and Partners
export const collaborators: Collaborator[] = [
  // Add key collaborators here:
  // {
  //   name: "Dr. Jane Researcher",
  //   affiliation: "University Name",
  //   role: "Collaborator",
  //   website: "https://example.com",
  // },
];

// Alumni
export const alumni: TeamMember[] = [
  // Add alumni here:
  // {
  //   name: "Former Member",
  //   role: "Former Position → Current Position",
  //   bio: "Brief description of their time in the lab and current position.",
  //   image: "/images/team/alumni.jpg",
  // },
];
