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
        {/* Contenedor de la línea de tiempo */}
        <div className="relative mt-12 max-w-3xl mx-auto">
          {/* La línea vertical. En móvil a la izquierda, en escritorio al centro. */}
          <div className="absolute left-4 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

          {/* Mapeo de las entradas de experiencia */}
          {experienceData.entries.map((entry, index) => (
            <div key={entry.company} className="relative mb-8 md:mb-12">
              {/* Contenedor de fila que alterna su dirección en escritorio */}
              <div
                className={`flex items-start gap-4 md:gap-8 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* El punto de la línea de tiempo y el ícono */}
                <div className="flex items-center justify-center md:absolute md:left-1/2 md:top-4 md:-translate-x-1/2">
                  <div className="z-10 flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Briefcase className="size-4" />
                  </div>
                </div>

                {/* La tarjeta con los detalles de la experiencia */}
                <div className="w-full rounded-lg border bg-card p-4 text-card-foreground shadow-sm md:w-[calc(50%-2rem)]">
                  <div className="flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center">
                    {/* <h3 className="font-bold">{entry.position}</h3> */}
                    <p className="text-sm text-muted-foreground">{entry.date}</p>
                  </div>
                  <p className="mb-2 text-sm font-semibold">{entry.company}</p>
                  <p className="text-sm text-muted-foreground">
                    {entry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
