import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeProvider from "../theme-provider";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
];

function NavList() {
  return (
    <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map(({ label, href }) => (
        <Typography
          key={label}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a
            href={href}
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            {label}
          </a>
        </Typography>
      ))}
    </ul>
  );
}

export default function LabNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [shouldShowBorder, setShouldShowBorder] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShouldShowBorder(true);
      } else {
        setShouldShowBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <ThemeProvider>
      <Navbar
        className={`sticky top-0 z-10 mx-auto max-w-screen-2xl px-4 py-2 lg:px-8 lg:py-4 bg-white transition-shadow ${
          shouldShowBorder ? "shadow-md" : ""
        }`}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-bold text-xl"
          >
            AI (Wong) Lab
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto lg:hidden"
          >
            {isNavOpen ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={isNavOpen}>
          <div className="mt-2">
            <NavList />
          </div>
        </Collapse>
      </Navbar>
    </ThemeProvider>
  );
}
