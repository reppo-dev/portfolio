"use client";

import { RiFileCopyLine } from "react-icons/ri";
import CustomLink from "./CustomLink";

const email = "m.shouridegan@gmail.com";
const [emailName, emailDomain] = email.split("@");

const Footer = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
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
        <div className="flex items-end justify-between gap-4">
          <h4 className="min-w-0 text-2xl sm:text-5xl uppercase font-bold">
            {emailName}
            <br />
            @{emailDomain}
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
