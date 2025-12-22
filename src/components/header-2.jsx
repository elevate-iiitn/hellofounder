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
  const menuRef = React.useRef(null);

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
    <>
      {/* HEADER BAR */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 mx-auto w-full max-w-5xl md:rounded-md md:border md:transition-all",
          {
            "bg-background/95 supports-backdrop-filter:bg-background/50 backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow":
              scrolled && !open,
            "bg-background/90 backdrop-blur-lg": open,
          }
        )}
      >
        <nav className="flex h-14 items-center justify-between px-4 md:h-12">
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
      </header>

      {/* FULLSCREEN MOBILE MENU */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden bg-black font-[Poppins]",
          "transition-opacity duration-300 ease-out",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onPointerDown={(e) => {
          if (menuRef.current && !menuRef.current.contains(e.target)) {
            setOpen(false);
          }
        }}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 rounded-lg border border-white/20 p-2 text-white"
        >
          ✕
        </button>

        {/* MENU CONTENT */}
        <div
          ref={menuRef}
          className="flex h-full flex-col items-center justify-center gap-8"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white text-[20px] font-medium tracking-tight"
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://tally.so/r/gDayXN"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6"
          >
            <Button className="h-12 px-10 rounded-xl text-base">Apply</Button>
          </a>
        </div>
      </div>
    </>
  );
}
