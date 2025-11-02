import ContactSection from "@/components/home/contact-section";
import DevelopmentShowcaseSection from "@/components/home/development/development-showcase";
import HeroSection from "@/components/home/hero/hero";
import MeteorShower from "@/components/home/hero/meteor-shower";
import Particles from "@/components/home/hero/particles";
import PhysicsShowcaseSection from "@/components/home/physics/physics-showcase";
import ResumeSection from "@/components/home/resume/resume";

export default function Home() {
  return (
    <>
      <MeteorShower />
      <Particles />
      <HeroSection />

      <section className="bg-muted py-8"></section>

      <PhysicsShowcaseSection />

      <hr className="my-8" />

      <DevelopmentShowcaseSection />

      <hr className="my-8" />

      <ResumeSection />

      <hr className="my-8" />

      <ContactSection />
    </>
  );
}
