import { Link } from "react-router-dom";
import { CalendarCheck, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, whatsappLink } from "@/lib/site";

export const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 shadow-elegant md:p-16">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/50 blur-3xl" />
            <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-primary-foreground">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
                Book a Consultation
              </p>
              <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl text-balance">
                Take the first step toward expert hematology care.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                Schedule an in-person visit or a global video consultation. Our care team responds
                within a few hours.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/appointment">
                    <CalendarCheck className="h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button asChild variant="whatsapp" size="xl">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Now
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-md">
              <ul className="space-y-6 text-primary-foreground">
                <li className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary-foreground/60">Call</p>
                    <a href={`tel:${site.contact.phone}`} className="text-base font-medium hover:text-accent">
                      {site.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary-foreground/60">Email</p>
                    <a href={`mailto:${site.contact.email}`} className="text-base font-medium hover:text-accent">
                      {site.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary-foreground/60">Clinic</p>
                    <p className="text-base font-medium">{site.contact.address}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;