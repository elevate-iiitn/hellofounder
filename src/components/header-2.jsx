"use client";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/menu-toggle-icon";
import { useScroll } from "@/components/use-scroll";
import Image from "next/image";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  const links = [
    { label: "Curriculum", href: "#curriculum" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faqs" },
  ];

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-md md:border md:transition-all",
        {
          "bg-background/95 supports-backdrop-filter:bg-background/50 backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow":
            scrolled && !open,
          "bg-background/90 backdrop-blur-lg": open,
        }
      )}
    >
      {/* NAV BAR */}
      <nav
        className={cn(
          "flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all",
          { "md:px-2": scrolled }
        )}
      >
        <a href="#hero" aria-label="Scroll to top">
          <Image
            src="/images/isflogo-nobg.png"
            alt="ISF Logo"
            width={120}
            height={40}
            className="h-10 w-auto md:h-12"
            priority
          />
        </a>

        {/* DESKTOP */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={buttonVariants({ variant: "ghost" })}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://tally.so/r/gDayXN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Apply</Button>
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={cn(
          "fixed top-14 left-0 right-0 z-40 md:hidden",
          "h-[calc(100vh-3.5rem)]",
          "bg-black/95 backdrop-blur-xl",
          "transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className={cn(
            "flex flex-col items-center gap-6 px-6 pt-10",
            "transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "translate-y-0" : "-translate-y-2"
          )}
        >
          {/* LINKS */}
          <div className="flex flex-col items-center gap-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://tally.so/r/gDayXN"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full max-w-xs"
          >
            <Button className="w-full h-12 rounded-xl text-base">Apply</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
