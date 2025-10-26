import { Button } from "@/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="theme-container relative flex h-[calc(100vh-4rem)] min-h-[700px] flex-col items-center justify-center p-6 text-center"
    >
      <div className="absolute inset-0 top-1/4 -z-10 overflow-hidden">
        <div className="from-primary absolute top-0 left-1/2 aspect-square min-h-screen w-[250vw] -translate-x-1/2 rounded-full bg-linear-to-b from-0% to-transparent to-5% p-px">
          <div className="bg-background flex h-full w-full justify-center overflow-hidden rounded-full p-px">
            <div className="bg-primary h-20 w-full rounded-full blur-3xl"></div>
          </div>
          <div
            className="absolute top-0 h-full w-full justify-center overflow-hidden rounded-full bg-transparent p-px opacity-50 mix-blend-overlay"
            style={{
              backgroundImage:
                "url(/img/topography.svg); -webkit-mask-image: linear-gradient(white 0%, transparent 5%); mask-image: linear-gradient(white 0%, transparent 5%);",
            }}
          />
        </div>
      </div>

      <Image
        className="border-primary mb-6 size-40 rounded-full border-4 object-cover shadow-lg md:size-56"
        width={224}
        height={224}
        src="/img/jan-bulling.png"
        alt="Jan Bulling - profile picture"
      />
      <h1 className="text-primary text-4xl font-extrabold lg:text-6xl">
        Jan Bulling
      </h1>
      <p className="text-primary mt-3 text-xl font-semibold lg:text-3xl">
        Physicist & Developer
      </p>
      <p className="text-muted-foreground mt-6 max-w-2xl text-lg">
        Welcome! I'm a passionate problem-solver, equally at home architecting
        scalable web applications as I am exploring the fundamental laws of the
        universe.
      </p>

      <div className="mt-12 flex items-center gap-4">
        <a href="#showcase">
          <Button>View my projects</Button>
        </a>
        <a href="#resume">
          <Button variant="border">My Experience</Button>
        </a>
      </div>

      <a
        href="#showcase"
        className="mt-12 animate-bounce p-4 transition-transform duration-200 hover:translate-y-1 hover:animate-none"
      >
        <ChevronDown />
      </a>
    </section>
  );
}
