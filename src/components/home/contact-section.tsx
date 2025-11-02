import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="theme-container mx-auto max-w-4xl px-4 py-12"
    >
      <h2 className="text-primary text-xl font-semibold">Reach out</h2>
      <p className="text-primary text-sm">
        Reach put to me via email or on social media
      </p>

      <div className="mt-4 grid max-w-sm grid-cols-3 gap-2">
        <div className="">Email</div>
        <Link href="mailto:jan.bulling@gmx.de" className="col-span-2">
          <div className="hover:underline">
            jan.bulling
            <span className="text-muted-foreground mx-1">[symbol]</span>
            gmx.de
          </div>
        </Link>

        <div className="">Github</div>
        <Link
          href="https://github.com/janbulling"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2"
        >
          <div className="hover:underline">janbulling</div>
        </Link>

        <div className="">LinkedIn</div>
        <Link
          href="https://www.linkedin.com/in/jan-bulling/"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2"
        >
          <div className="hover:underline">Jan Bulling</div>
        </Link>
      </div>
    </section>
  );
}
