import { site } from "@/lib/site";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container-tight py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-hero">
                <span className="text-primary-foreground font-serif text-lg font-bold">N</span>
              </div>
              <div>
                <p className="font-serif text-lg font-semibold text-primary">Dr. Narendra Agrawal</p>
                <p className="text-xs text-muted-foreground">Consultant Hematologist · Blood Cancer Specialist</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              World-class hematology and blood cancer care combining advanced therapies, ethical practice
              and a deeply human touch.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-primary transition-smooth">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={`tel:${site.contact.phone}`} className="hover:text-primary">{site.contact.phone}</a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="hover:text-primary">{site.contact.email}</a>
              </li>
              <li>{site.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Dr. Narendra Agrawal. All rights reserved.</p>
          <p>Disclaimer: This site is for informational purposes only and does not replace medical advice.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;