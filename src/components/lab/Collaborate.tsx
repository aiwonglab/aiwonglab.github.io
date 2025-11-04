import React from "react";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import {
  UsersIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const opportunities = [
  {
    icon: AcademicCapIcon,
    title: "Research Collaboration",
    description: "Work with us on AI and informatics research projects in critical care settings.",
  },
  {
    icon: UsersIcon,
    title: "Join Our Team",
    description: "Opportunities for researchers, clinicians, and data scientists interested in our work.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Funding & Sponsorship",
    description: "Information about supporting our research through grants and institutional partnerships.",
  },
];

export function Collaborate() {
  return (
    <ThemeProvider>
      <section id="collaborate" className="py-20 px-8 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-6 font-bold">
              Collaborate With Us
            </Typography>
            <Typography variant="lead" color="blue-gray" className="text-lg">
              We welcome opportunities to work with researchers, clinicians, and organizations
              interested in critical care AI and informatics.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {opportunities.map((opp, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardBody className="text-center">
                  <opp.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
                    {opp.title}
                  </Typography>
                  <Typography color="gray" className="text-sm">
                    {opp.description}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Typography color="blue-gray" className="mb-6 text-lg">
              Interested in working with us? We'd love to hear from you.
            </Typography>
            <a href="/contact">
              <Button size="lg" color="blue" className="shadow-md">
                Get In Touch
              </Button>
            </a>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default Collaborate;
