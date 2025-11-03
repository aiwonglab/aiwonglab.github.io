import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import {
  HeartIcon,
  CpuChipIcon,
  AcademicCapIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const focusAreas = [
  {
    icon: HeartIcon,
    title: "Critical Care AI",
    description: "Developing machine learning models to improve patient outcomes in intensive care settings.",
  },
  {
    icon: CpuChipIcon,
    title: "Clinical Informatics",
    description: "Leveraging electronic health records and clinical data to drive evidence-based practice.",
  },
  {
    icon: AcademicCapIcon,
    title: "Decision Support",
    description: "Building intelligent systems to assist clinicians in complex diagnostic and therapeutic decisions.",
  },
  {
    icon: UserGroupIcon,
    title: "Implementation Science",
    description: "Studying the real-world adoption and impact of AI tools in healthcare environments.",
  },
];

export function Mission() {
  return (
    <ThemeProvider>
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto">
          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Typography variant="h2" color="blue-gray" className="mb-6 font-bold">
              Our Mission
            </Typography>
            <Typography variant="lead" color="blue-gray" className="text-lg leading-relaxed">
              To advance critical and acute care through rigorous research in artificial intelligence
              and clinical informatics, translating cutting-edge technology into practical solutions
              that improve patient outcomes and support healthcare professionals.
            </Typography>
          </div>

          {/* Focus Areas */}
          <div className="mb-12">
            <Typography variant="h3" color="blue-gray" className="mb-12 text-center font-bold">
              Research Focus Areas
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {focusAreas.map((area, index) => (
                <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardBody className="text-center">
                    <area.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                    <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
                      {area.title}
                    </Typography>
                    <Typography color="gray" className="text-sm">
                      {area.description}
                    </Typography>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default Mission;
