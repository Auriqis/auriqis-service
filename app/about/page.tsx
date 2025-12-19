import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the certified, dynamic team behind Aurum — driven by quality, innovation, and velocity.",
};

export default function AboutPage() {
  return (
    <main className="relative bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-balance text-5xl md:text-6xl font-medium tracking-tight">
            The Certified, Dynamic Team Driving Innovation.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Inspired by Aurum — Gold — we exist to craft systems defined by
            quality, precision, and forward momentum.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-medium tracking-tight">Our Story</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Aurum was founded with a singular belief: modern businesses
              deserve systems that are not only functional, but exceptional.
              Inspired by gold — a symbol of enduring value — we set out to
              build Quality Innovative Systems that stand the test of scale,
              complexity, and time.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We blend AI, Cloud, and product engineering to move faster than
              traditional agencies — without compromising on rigor or
              reliability.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-medium tracking-tight">Our Team</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We are a young, dynamic team with active professional and
              corporate experience across AI, Cloud, and full-stack systems. Our
              engineers are not just builders — they are certified specialists
              with real-world delivery experience.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Certifications are not badges for us — they are guarantees.
              Guarantees that the systems we design are secure, scalable, and
              built with industry-proven expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-7xl px-6 lg:px-12 py-24">
        <h2 className="text-3xl font-medium tracking-tight">Our Core Values</h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <ValueCard
            title="Quality"
            description="We engineer with precision. From architecture to execution, quality is non-negotiable in every system we deliver."
          />
          <ValueCard
            title="Innovation"
            description="We embrace emerging technologies to solve real problems — not trends, but tools that create durable advantage."
          />
          <ValueCard
            title="Velocity"
            description="Speed matters. We optimize for rapid learning, fast iteration, and early value — without sacrificing stability."
          />
        </div>
      </section>
    </main>
  );
}

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 p-8 backdrop-blur-sm">
      <h3 className="text-xl font-medium tracking-tight">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
