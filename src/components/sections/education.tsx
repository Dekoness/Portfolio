import { educationData } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="educacion" className="w-full bg-secondary dark:bg-card py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {educationData.title}
          </h2>
        </div>
        <div className="mt-12 flow-root">
          <ul className="-mb-8">
            {educationData.entries.map((entry, index) => (
              <li key={entry.degree}>
                <div className="relative pb-8">
                  {index !== educationData.entries.length - 1 && (
                    <span
                      className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-border"
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary ring-8 ring-secondary dark:ring-card">
                          <GraduationCap className="h-5 w-5 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-1.5">
                      <div className="text-md text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          {entry.degree}
                        </span>
                        <span className="whitespace-nowrap ml-2 text-sm">({entry.date})</span>
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {entry.institution}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
