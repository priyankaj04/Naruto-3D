import { Github, Home, Linkedin, NotebookText, Palette, Phone, Twitter, User, } from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";
import uzumakilogo from '../../../public/background/uzumakilogo.png';

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-10 h-10 p-2" strokeWidth={3} />;
    case "about":
      return <User className="w-10 h-10 p-2 " strokeWidth={3} />;
    case "projects":
      return <Palette className="w-10 h-10 p-2" strokeWidth={3} />;
    case "contact":
      return <Phone className="w-10 h-10 p-2" strokeWidth={3} />;
    case "github":
      return <Github className="w-10 h-10 p-2" strokeWidth={3} />;
    case "linkedin":
      return <Linkedin className="w-10 h-10 p-2" strokeWidth={3} />;
    case "twitter":
      return <Twitter className="w-10 h-10 p-2" strokeWidth={3} />;
    case "resume":
      return <NotebookText className="w-10 h-10 p-2" strokeWidth={3} />;
    default:
      return <Home className="w-10 h-10 p-2" strokeWidth={3} />;
  }
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const NavLink = motion(Link);

const NavButton = ({ x, y, label, link, icon, newTab, labelDirection = "right", }) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
            <div
              className="absolute cursor-pointer z-50 flex items-center justify-center"
              style={{
                transform: `translate(${x}, ${y})`,

              }}
            >
              <NavLink
                variants={item}
                href={link}
                target={newTab ? "_blank" : "_self"}
                className="rounded-full flex items-center justify-center flex-col"
                aria-label={label}
                name={label}
                prefetch={false}
                scroll={false}
              >
                <span
                  style={{
                    background: `url(${uzumakilogo.src}) no-repeat center/cover`, // Set opacity for background image
                    width: 80,
                    height: 80,
                  }}
                  className={`relative flex justify-center p-4 w-14 h-14 items-center animate-spin-slow-reverse group-hover:pause opacity-100`}
                >
                  {getIcon(icon)}
                  <span className="peer bg-gray absolute top-0 left-0 w-full h-full opacity-100" />
                  <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 text-white text-sm rounded-md shadow-lg whitespace-nowrap">
                    {label}
                  </span>
                </span>
                <span className="animate-spin-slow-reverse group-hover:pause">{label}</span>
              </NavLink>
            </div>
        ) : (
          <div className="w-fit cursor-pointer z-50" style={{
            backgroundImage: `url(${uzumakilogo.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: 200
          }}>
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full flex items-center justify-center custom-bg"
              aria-label={label}
              name={label}
              prefetch={false}
              scroll={false}
            >
              <span className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                    labelDirection === "left" ? "right-full left-auto" : ""
                  )}
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;