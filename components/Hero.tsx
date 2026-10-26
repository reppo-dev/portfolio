"use client";

import Image from "next/image";
import CustomLink from "./CustomLink";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";

const Hero = () => {
  useGSAP(() => {
    const split = SplitText.create(".hero-text", { type: "words,lines" });

    const words = split.words;

    gsap.fromTo(
      words,
      {
        opacity: 0,
        filter: "blur(20px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        ease: "power2.inOut",
        stagger: {
          each: 0.09,
          from: "start",
        },
      },
    );

    return () => split.revert();
  });
  return (
    <section className="pt-20 pb-10">
      <div className="container flex flex-col items-center">
        <div className="size-24 bg-black flex rounded-full overflow-hidden">
          <Image
            src="/images/github-profile.jpg"
            alt="Mohammad Amin's profile photo"
            width={160}
            height={160}
            className="size-full object-cover"
          />
        </div>
        <div className="text-center mt-4 space-y-4">
          <h1 className="font-extrabold text-4xl lg:text-6xl uppercase w-full h-full text-foreground">
            Mohammad Amin a <br />{" "}
            <span className="outline-text">
              {" "}
              Fullstack
            </span>{" "}
            developer.
          </h1>
          <p className="hero-text mx-auto text-muted-foreground">
            I build complete web applications from idea to deployment.
            Specializing in React, Next.js, and Go, I create scalable systems
            with clean architecture and seamless user experiences.
          </p>
          <CustomLink
            label="More about me"
            href="/#about"
            className="text-xl font-semibold"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
