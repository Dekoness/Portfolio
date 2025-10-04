import Link from "next/link";
import { siteConfig, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.author}. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            {socialLinks.map((link) => (
              <Tooltip key={link.name}>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" asChild>
                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-6 w-6" />
                      <span className="sr-only">{link.name}</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </footer>
  );
}
