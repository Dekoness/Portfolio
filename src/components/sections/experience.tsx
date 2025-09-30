import { experienceData } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experiencia" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {experienceData.title}
          </h2>
        </div>
        <div className="relative mt-12 max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {experienceData.entries.map((entry, index) => (
            <div key={entry.company} className="relative mb-12">
              <div className="absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background"></div>
              <div className={`flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} w-full`}>
                <div className="w-1/2 px-6">
                  <div className={`p-6 rounded-lg border bg-card shadow-md ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <p className="text-sm text-muted-foreground">{entry.date}</p>
                    <h3 className="text-xl font-bold text-primary">{entry.role}</h3>
                    <p className="font-semibold">{entry.company}</p>
                    <p className="mt-2 text-muted-foreground">{entry.description}</p>
                  </div>
                </div>
                <div className="w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
