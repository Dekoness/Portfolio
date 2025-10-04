import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { heroData } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="inicio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="flex flex-col items-center justify-center space-y-6 text-center lg:col-span-3 lg:items-start lg:text-left">
            <div className="relative">
              <Image
                src={heroData.avatar.imageUrl}
                alt="Avatar de Federico Zoppi"
                width={150}
                height={150}
                className="rounded-full border-4 border-primary shadow-lg"
                data-ai-hint={heroData.avatar.imageHint}
                priority
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {heroData.name}
              </h1>
              <h2 className="text-2xl font-bold text-accent md:text-3xl">
                {heroData.title}
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {heroData.bio}
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href={heroData.cvUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar CV
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#contacto">
                  Contactar
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:col-span-2 lg:flex items-center justify-center">
             <div className="relative w-full max-w-md">
                 <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl"></div>
                 <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/50 to-accent/50 opacity-20 blur-xl"></div>
                <div className="w-full h-auto aspect-square rounded-full bg-gradient-to-br from-background via-secondary to-background border-2 border-primary/10 shadow-2xl flex items-center justify-center">
                    <p className="text-8xl font-black text-primary/10 select-none">&lt;/&gt;</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
