import React from "react";
import { Typography, Card, CardBody, Button, Chip } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// Featured recent publications
const publications = [
  {
    title: "Differences in arterial blood gas testing by race and sex across 161 US hospitals in 4 EHR databases",
    authors: "Matos J, Alwakeel M, Hao S, Naamani D, Struja T, Gichoya JW, Celi LA, McMahon T, King H, Cox CE, Kibbe WA, Hong C, Wong AI",
    journal: "American Journal of Respiratory and Critical Care Medicine",
    year: "2025",
    tags: ["Health Equity", "EHR", "Arterial Blood Gas"],
    description: "Multi-center analysis revealing disparities in arterial blood gas testing practices across race and sex in US hospitals.",
    link: "#",
  },
  {
    title: "BOLD: Blood-gas and Oximetry Linked Dataset",
    authors: "Matos J, Struja T, Gallifant J, Nakayama LF, Charpignon ML, Liu X, Economou-Zavlanos N, Cardoso J, Johnson K, Bhavsar N, Gichoya JW, Celi LA, Wong AI",
    journal: "Nature Scientific Data",
    year: "2024",
    tags: ["Dataset", "Pulse Oximetry", "Open Science"],
    description: "A comprehensive linked dataset of blood gas measurements and pulse oximetry readings for bias research and clinical validation.",
    link: "https://www.nature.com/articles/s41597-024-03225-z",
  },
  {
    title: "A Clinician's Guide to Understanding Bias in Critical Clinical Prediction Models",
    authors: "Matos J, Gallifant J, Chowdhury A, Economou-Zavlanos N, Charpignon ML, Gichoya J, Celi LA, Nazer L, King H, Wong AK",
    journal: "Critical Care Clinics",
    year: "2024",
    tags: ["Bias", "Machine Learning", "Clinical Decision Support"],
    description: "Practical guidance for clinicians on identifying and addressing bias in AI-based prediction models used in critical care.",
    link: "https://doi.org/10.1016/j.ccc.2024.05.011",
  },
  {
    title: "Utility of skin tone on pulse oximetry in critically ill patients: a prospective cohort study",
    authors: "Hao S, Dempsey K, Matos J, Cox CE, Rotemberg V, Gichoya JW, Kibbe W, Hong C, Wong AI",
    journal: "Critical Care Explorations",
    year: "2024",
    tags: ["Pulse Oximetry", "Health Equity", "Prospective Study"],
    description: "Prospective evaluation of skin tone's impact on pulse oximetry accuracy in critically ill patients.",
    link: "https://doi.org/10.1097/CCE.0000000000001133",
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
