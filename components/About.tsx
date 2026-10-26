import Image from "next/image";
import { aboutItems } from "@/data/data";

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 py-20 border-t border-border">
      <div className="container space-y-14">
        <div className="space-y-3">
          <div className="text-4xl lg:text-7xl font-bold flex items-center">
            <span>Ab</span>o
            {/* <Image
              src="/images/images.jpg"
              alt="About icon"
              width={512}
              height={512}
              className="size-14 inline-block rounded-full shrink-0"
            /> */}
            <span>ut me</span>
          </div>
          <p className="text-muted-foreground">
            Software Engineer specializing in the design and development of
            full-stack applications with React, Next.js, and Go. I focus on
            implementing clean architecture and secure authentication patterns
            to build reliable, scalable systems. My work demonstrates a
            commitment to engineering best practices, from optimizing frontend
            performance to designing efficient APIs and database schemas.
          </p>
        </div>
        <div className="border-t border-border">
          {aboutItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-8 border-b border-border py-2"
            >
              <div className="size-24 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={512}
                  height={512}
                  className="w-full h-auto object-cover dark:invert"
                />
              </div>
              <div className="">
                <h3 className="text-4xl font-bold uppercase">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
