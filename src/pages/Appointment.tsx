import { Link } from "react-router-dom";
import { Video, Building2, ArrowRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

const options = [
  {
    icon: Video,
    title: "Online Booking",
    desc: "Consult Dr. Agrawal over secure video from anywhere in the world.",
    href: "/appointment/online",
    tag: "Video Consultation",
    cta: "Online Booking",
  },
  {
    icon: Building2,
    title: "In-Person Visit",
    desc: "Book a face-to-face consultation at the clinic in Rohini, Delhi.",
    href: "#",
    tag: "Clinic Visit",
    cta: "Coming Soon",
  },
];

const Appointment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="container-tight max-w-5xl">
          <div className="text-center mb-14 animate-fade-in">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Book Appointment
            </p>
            <h1 className="font-serif text-3xl md:text-5xl font-semibold text-primary text-balance">
              Choose how you'd like to consult
            </h1>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Whether you're across the city or across the globe, expert hematology care is one click away.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {options.map((opt) => {
              const Icon = opt.icon;
              const isActive = opt.href !== "#";
              const Card = (
                <div
                  className={`group h-full rounded-3xl border border-border bg-card p-8 shadow-card transition-smooth ${
                    isActive ? "hover:-translate-y-1 hover:shadow-elegant cursor-pointer" : "opacity-70"
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-glow">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent">
                    {opt.tag}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-primary">{opt.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{opt.desc}</p>
                  <div className="mt-8">
                    <Button variant={isActive ? "hero" : "outline"} size="lg" disabled={!isActive}>
                      {opt.cta}
                      {isActive && <ArrowRight className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              );
              return isActive ? (
                <Link key={opt.title} to={opt.href} className="block">
                  {Card}
                </Link>
              ) : (
                <div key={opt.title}>{Card}</div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Appointment;