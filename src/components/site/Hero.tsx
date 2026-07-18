import { MessageCircle, CalendarCheck, ShieldCheck, Award, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorImg from "@/assets/dr-agrawal.png";
import { whatsappLink } from "@/lib/site";
import ProfessionalHighlights from "@/components/site/ProfessionalHighlights";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-soft pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="container-tight grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-in">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            20+ years of clinical excellence
          </p>

          <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-primary md:text-5xl lg:text-6xl text-balance">
            Dr. Narendra Agrawal
            <span className="mt-3 block text-xl font-normal text-accent md:text-2xl lg:text-3xl">
              Consultant Hematologist · Blood Cancer Specialist
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Personalised, precision-driven treatment for leukemia, lymphoma, myeloma and complex
            blood disorders — backed by international protocols and a deeply human approach.
          </p>

          <div className="mt-8 max-w-xl">
            <ProfessionalHighlights />
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="#contact">
                <CalendarCheck className="h-5 w-5" />
                Book Appointment
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Consultation
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Award className="h-4 w-4 text-accent" /> Fellowship trained (BMT)
            </span>
            <span className="inline-flex items-center gap-2">
              <Stethoscope className="h-4 w-4 text-accent" /> 5,000+ patients cared for
            </span>
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-hero opacity-90 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white shadow-elegant">
            <img
              src={doctorImg}
              alt="Portrait of Dr. Narendra Agrawal, Consultant Hematologist"
              width={896}
              height={1152}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-background/90 p-4 backdrop-blur-md shadow-card">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Now consulting</p>
                  <p className="text-sm font-semibold text-primary">New Delhi · Online worldwide</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                  <span className="h-2 w-2 rounded-full bg-accent animate-float" />
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;