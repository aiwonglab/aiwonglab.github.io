import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

// Placeholder team data - replace with actual team information
const teamMembers = [
  {
    name: "A. Ian Wong, MD, PhD",
    role: "Principal Investigator",
    bio: "Dr. Wong leads research at the intersection of artificial intelligence and critical care medicine. His work focuses on developing clinically-validated AI tools for acute care settings.",
    credentials: "MD, PhD",
    image: "/images/team/placeholder.jpg", // Replace with actual image
  },
  // Add more team members as needed
];

const alumni = [
  // Add alumni/collaborators as needed
];

export function Team() {
  return (
    <ThemeProvider>
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-6 font-bold">
              Our Team
            </Typography>
            <Typography variant="lead" color="blue-gray" className="text-lg">
              A multidisciplinary team of clinicians, data scientists, and engineers
              working to advance critical care through AI and informatics.
            </Typography>
          </div>

          {/* Principal Investigator */}
          <div className="max-w-4xl mx-auto mb-20">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-md">
                <CardBody>
                  <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                    <div className="flex-shrink-0">
                      <Avatar
                        src={member.image}
                        alt={member.name}
                        size="xxl"
                        className="w-40 h-40 border-4 border-gray-200"
                      />
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                      <Typography variant="h3" color="blue-gray" className="mb-2 font-bold">
                        {member.name}
                      </Typography>
                      <Typography variant="h6" color="blue" className="mb-4">
                        {member.role}
                      </Typography>
                      <Typography color="gray" className="mb-4 leading-relaxed">
                        {member.bio}
                      </Typography>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Research Team Section - Can be expanded later */}
          <div className="max-w-4xl mx-auto text-center">
            <Typography variant="h4" color="blue-gray" className="mb-6 font-bold">
              Collaborators & Partners
            </Typography>
            <Typography color="gray" className="mb-8">
              We collaborate with leading researchers and institutions in critical care,
              informatics, and machine learning to advance our research mission.
            </Typography>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default Team;
