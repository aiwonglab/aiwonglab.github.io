import React from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function LabFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <ThemeProvider>
      <footer className="bg-gray-900 text-white py-12 px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <Typography variant="h5" className="mb-4 font-bold">
                AI Wong Lab
              </Typography>
              <Typography className="text-gray-300 text-sm">
                Advancing critical and acute care through artificial intelligence
                and clinical informatics research.
              </Typography>
            </div>

            {/* Quick Links */}
            <div>
              <Typography variant="h6" className="mb-4 font-bold">
                Quick Links
              </Typography>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/publications" className="text-gray-300 hover:text-white transition-colors">
                    Publications
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <Typography variant="h6" className="mb-4 font-bold">
                Connect
              </Typography>
              <Typography className="text-gray-300 text-sm mb-2">
                For inquiries about research collaboration,
                please visit our contact page.
              </Typography>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <Typography className="text-gray-400 text-sm">
              © {currentYear} AI Wong Lab. All rights reserved.
            </Typography>
          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
}

export default LabFooter;
