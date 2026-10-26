"use client";

import { RiFileCopyLine } from "react-icons/ri";
import CustomLink from "./CustomLink";

const Footer = () => {
  const handleCopyEmail = () => {
    const email = "reppo.dev@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setTimeout(() => 2000);
    });
  };
  return (
    <footer className="border-t border-border bg-muted text-foreground pt-10 pb-10">
      <div className="container space-y-9 flex flex-col justify-center h-full">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <button onClick={handleCopyEmail} className="cursor-pointer">
              Email
            </button>
            <span>linkedin</span>
          </div>
          <div className="flex gap-3">
            {["Twitter", "Whatsup"].map((link) => (
              <CustomLink key={link} label={link} href="#" />
            ))}
          </div>
        </div>
        <div className="flex items-end justify-between">
          <h4 className="text-4xl sm:text-5xl text-nowrap uppercase font-bold">
            reppo.dev
            <br />
            @gmail.com
          </h4>
          <button
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            className="border border-border flex items-center gap-0.5 py-1.5 px-3.5 rounded-full hover:bg-foreground hover:text-background focus-visible:ring-2 focus-visible:ring-ring transition-colors font-semibold"
          >
            <RiFileCopyLine />
          </button>
        </div>
        <p className="border-t border-border pt-1.5 mt-auto">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
