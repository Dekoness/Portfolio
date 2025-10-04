import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { projectsData } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section id="proyectos" className="w-full bg-secondary dark:bg-card py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {projectsData.title}
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {projectsData.projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden">
              <CardHeader>
                <div className="aspect-video relative">
                    <Image
                    src={project.image.imageUrl}
                    alt={`Imagen del proyecto ${project.title}`}
                    fill
                    className="object-cover rounded-t-lg"
                    data-ai-hint={project.image.imageHint}
                    />
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
              {project.links.github && project.links.github !== "#" &&(
                <Button variant="outline" asChild>
                  <Link href={project.links.github} target="_blank">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
                )}
                {project.links.live && project.links.live !== "#" && (
                  <Button asChild>
                    <Link href={project.links.live} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
