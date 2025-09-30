import { aboutData } from "@/lib/data";

export function About() {
  return (
    <section id="sobre-mi" className="w-full bg-secondary dark:bg-card py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {aboutData.title}
          </h2>
          <p className="text-muted-foreground md:text-lg">
            {aboutData.description}
          </p>
        </div>
      </div>
    </section>
  );
}
