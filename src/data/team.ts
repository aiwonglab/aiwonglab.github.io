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
    image: "/images/team/wong_ian.jpg",
    email: "your.email@institution.edu", // Optional: add your contact
    googleScholar: "https://scholar.google.com/citations?user=HMyXWb4AAAAJ&hl=en&oi=ao",
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
  {
    name: "Mahmoud Alwakeel, MD",
    role: "Clinical Informatics Fellow",
    bio: "Dr. Alwakeel is a clinical informatics fellow focused on AI applications in healthcare and clinical decision support systems.",
    credentials: "MD",
    image: "/images/team/alwakeel_mahmoud.jpg",
  },
  {
    name: "Brenda Zhang",
    role: "Master's Student, Duke Biostatistics & Bioinformatics",
    bio: "Brenda is a master's student contributing to research in clinical informatics and biostatistics.",
    image: "/images/team/zhang_brenda.jpg",
  },
  {
    name: "Aashish Cheruvu",
    role: "Undergraduate Student, Duke Biomedical Engineering",
    bio: "Aashish is an undergraduate researcher working on AI and medical device projects.",
    image: "/images/team/cheruvu_aashish.jpg",
  },
  {
    name: "Suim Park",
    role: "Research Assistant",
    bio: "Suim contributes to research projects in clinical informatics and data analysis.",
    image: "/images/team/park_suim.jpg",
  },
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
  {
    name: "Joao Matos, MS",
    role: "Research Assistant → PhD Student, University of Oxford",
    bio: "Joao contributed to research on AI bias in medical devices and clinical data analysis during his time in the lab.",
    image: "/images/team/matos_joao.jpg",
  },
  {
    name: "Sicheng Hao",
    role: "Research Assistant → PhD Student, National University of Singapore",
    bio: "Sicheng worked on pulse oximetry research and health equity studies in critical care.",
    image: "/images/team/hao_sicheng.jpg",
  },
  {
    name: "Katelyn Dempsey, MPH",
    role: "Research Coordinator → Clinical Research Coordinator, UNC",
    bio: "Katelyn contributed to health equity research and pulse oximetry studies.",
    credentials: "MPH",
    image: "/images/team/dempsey_katelyn.jpg",
  },
  {
    name: "Bob Zhang",
    role: "Research Assistant → Data Scientist, Lenovo",
    bio: "Bob worked on machine learning projects and clinical data analysis.",
    image: "/images/team/zhang_bob.jpg",
  },
];
