import React from "react";
import { Typography, Card, CardBody, Button, Chip } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// Placeholder for published research - replace with actual publications
const publications = [
  {
    title: "Machine Learning in Critical Care: A Systematic Review",
    authors: "Wong AI, et al.",
    journal: "Critical Care Medicine",
    year: "2024",
    tags: ["Machine Learning", "ICU", "Review"],
    description: "A comprehensive review of machine learning applications in intensive care units, evaluating clinical impact and implementation challenges.",
    link: "#",
  },
  {
    title: "Predicting Sepsis Onset Using Electronic Health Records",
    authors: "Wong AI, et al.",
    journal: "JAMA Network Open",
    year: "2023",
    tags: ["Sepsis", "EHR", "Prediction"],
    description: "Development and validation of a machine learning model for early sepsis detection in emergency department patients.",
    link: "#",
  },
  {
    title: "Implementation of AI-Driven Clinical Decision Support",
    authors: "Wong AI, et al.",
    journal: "Journal of Medical Internet Research",
    year: "2023",
    tags: ["Clinical Decision Support", "Implementation"],
    description: "Real-world implementation study of AI-based clinical decision support tools in acute care settings.",
    link: "#",
  },
];

export function Research() {
  return (
    <ThemeProvider>
      <section id="research" className="py-20 px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-6 font-bold">
              Recent Publications
            </Typography>
            <Typography variant="lead" color="blue-gray" className="text-lg">
              Our research focuses on developing and validating AI solutions for critical and acute care.
              All work is peer-reviewed and published in leading medical and informatics journals.
            </Typography>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="shadow-sm hover:shadow-lg transition-shadow">
                <CardBody>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div className="flex-1">
                      <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
                        {pub.title}
                      </Typography>
                      <Typography className="mb-2 text-sm text-gray-700">
                        {pub.authors} • <span className="font-semibold">{pub.journal}</span> • {pub.year}
                      </Typography>
                      <Typography color="gray" className="mb-4">
                        {pub.description}
                      </Typography>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pub.tags.map((tag, idx) => (
                          <Chip
                            key={idx}
                            value={tag}
                            size="sm"
                            variant="ghost"
                            color="blue"
                            className="rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="lg:ml-4">
                      <Button
                        variant="text"
                        color="blue"
                        className="flex items-center gap-2"
                        size="sm"
                      >
                        Read More
                        <ArrowRightIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/publications">
              <Button size="lg" variant="outlined" color="blue">
                View All Publications
              </Button>
            </a>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default Research;
