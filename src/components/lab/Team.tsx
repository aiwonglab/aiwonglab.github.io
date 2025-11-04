import React from "react";
import { Typography, Card, CardBody, Avatar, Button, Chip } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { teamMembers, students, collaborators, alumni } from "../../data/team";
import {
  EnvelopeIcon,
  GlobeAltIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

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

          {/* Principal Investigator & Core Team */}
          {teamMembers.length > 0 && (
            <div className="max-w-4xl mx-auto mb-20">
              {teamMembers.map((member, index) => (
                <Card key={index} className="shadow-md mb-6">
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
                        {/* Contact Links */}
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                          {member.email && (
                            <a href={`mailto:${member.email}`}>
                              <Button variant="text" size="sm" className="flex items-center gap-2">
                                <EnvelopeIcon className="w-4 h-4" />
                                Email
                              </Button>
                            </a>
                          )}
                          {member.googleScholar && (
                            <a href={member.googleScholar} target="_blank" rel="noopener noreferrer">
                              <Button variant="text" size="sm" className="flex items-center gap-2">
                                <AcademicCapIcon className="w-4 h-4" />
                                Scholar
                              </Button>
                            </a>
                          )}
                          {member.website && (
                            <a href={member.website} target="_blank" rel="noopener noreferrer">
                              <Button variant="text" size="sm" className="flex items-center gap-2">
                                <GlobeAltIcon className="w-4 h-4" />
                                Website
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}

          {/* Students & Research Staff */}
          {students.length > 0 && (
            <div className="max-w-6xl mx-auto mb-20">
              <Typography variant="h4" color="blue-gray" className="mb-8 text-center font-bold">
                Current Team
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {students.map((student, index) => (
                  <Card key={index} className="shadow-sm">
                    <CardBody className="text-center">
                      <Avatar
                        src={student.image}
                        alt={student.name}
                        size="xl"
                        className="w-24 h-24 mx-auto mb-4 border-2 border-gray-200"
                      />
                      <Typography variant="h6" color="blue-gray" className="mb-1 font-bold">
                        {student.name}
                      </Typography>
                      <Typography variant="small" color="blue" className="mb-3">
                        {student.role}
                      </Typography>
                      <Typography color="gray" className="text-sm mb-3">
                        {student.bio}
                      </Typography>
                      {student.googleScholar && (
                        <a href={student.googleScholar} target="_blank" rel="noopener noreferrer">
                          <Button variant="text" size="sm" className="flex items-center gap-1 mx-auto">
                            <AcademicCapIcon className="w-4 h-4" />
                            Scholar
                          </Button>
                        </a>
                      )}
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Collaborators & Partners */}
          {collaborators.length > 0 && (
            <div className="max-w-4xl mx-auto mb-20">
              <Typography variant="h4" color="blue-gray" className="mb-8 text-center font-bold">
                Collaborators & Partners
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {collaborators.map((collab, index) => (
                  <Card key={index} className="shadow-sm">
                    <CardBody>
                      <Typography variant="h6" color="blue-gray" className="mb-1 font-bold">
                        {collab.name}
                      </Typography>
                      <Typography variant="small" color="gray" className="mb-2">
                        {collab.affiliation}
                      </Typography>
                      {collab.role && (
                        <Chip value={collab.role} size="sm" variant="ghost" color="blue" className="w-fit" />
                      )}
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Default message if no collaborators */}
          {collaborators.length === 0 && (
            <div className="max-w-4xl mx-auto text-center">
              <Typography variant="h4" color="blue-gray" className="mb-6 font-bold">
                Collaborators & Partners
              </Typography>
              <Typography color="gray" className="mb-8">
                We collaborate with leading researchers and institutions in critical care,
                informatics, and machine learning to advance our research mission.
              </Typography>
            </div>
          )}

          {/* Alumni */}
          {alumni.length > 0 && (
            <div className="max-w-6xl mx-auto mt-20">
              <Typography variant="h4" color="blue-gray" className="mb-8 text-center font-bold">
                Lab Alumni
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {alumni.map((person, index) => (
                  <Card key={index} className="shadow-sm">
                    <CardBody className="text-center">
                      <Avatar
                        src={person.image}
                        alt={person.name}
                        size="xl"
                        className="w-24 h-24 mx-auto mb-4 border-2 border-gray-200"
                      />
                      <Typography variant="h6" color="blue-gray" className="mb-1 font-bold">
                        {person.name}
                      </Typography>
                      <Typography variant="small" color="gray" className="mb-2">
                        {person.role}
                      </Typography>
                      <Typography color="gray" className="text-sm mb-3">
                        {person.bio}
                      </Typography>
                      {person.googleScholar && (
                        <a href={person.googleScholar} target="_blank" rel="noopener noreferrer">
                          <Button variant="text" size="sm" className="flex items-center gap-1 mx-auto">
                            <AcademicCapIcon className="w-4 h-4" />
                            Scholar
                          </Button>
                        </a>
                      )}
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </ThemeProvider>
  );
}

export default Team;
