import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import LabNavbar from "./Navbar";

export function LabHero() {
  return (
    <ThemeProvider>
      <LabNavbar />
      <header className="min-h-screen w-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50 relative px-8 py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-6 leading-tight font-black text-5xl lg:text-6xl"
            >
              AI (Wong) Lab
            </Typography>
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-8 font-normal text-2xl lg:text-3xl"
            >
              Critical and Acute Care Informatics
            </Typography>
            <Typography
              variant="lead"
              color="blue-gray"
              className="mb-12 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Research in artificial intelligence and clinical informatics to support better patient care in critical and acute care settings.
            </Typography>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#research">
                <Button size="lg" color="blue" className="shadow-md">
                  Our Research
                </Button>
              </a>
              <a href="#collaborate">
                <Button size="lg" variant="outlined" color="blue" className="shadow-sm">
                  Collaborate With Us
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </header>
    </ThemeProvider>
  );
}

export default LabHero;
