import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-card"
          : "bg-transparent",
      )}
    >
      <div className="container-tight flex h-16 items-center justify-between md:h-20">
        <Link to="/#home" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-hero shadow-glow">
            <span className="text-primary-foreground font-serif text-lg font-bold">N</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-primary md:text-base">Dr. Narendra Agrawal</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground md:text-xs">
              Hematology · Blood Cancer
            </span>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary transition-smooth"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href={`tel:${site.contact.phone}`} className="hidden xl:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
            <Phone className="h-4 w-4" /> {site.contact.phone}
          </a>
          <Button asChild variant="hero" size="lg" className="rounded-full">
            <Link to="/appointment">Book Appointment</Link>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-primary hover:bg-secondary"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav aria-label="Mobile" className="container-tight py-4 flex flex-col gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary transition-smooth"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="hero" size="lg" className="rounded-full mt-2">
              <Link to="/appointment" onClick={() => setOpen(false)}>Book Appointment</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;