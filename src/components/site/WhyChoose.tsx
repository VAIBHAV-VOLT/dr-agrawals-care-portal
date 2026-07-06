import { Award, Microscope, HeartHandshake, Globe2, Users, ShieldCheck } from "lucide-react";
import Section from "./Section";

const items = [
  { icon: Award, title: "Fellowship-Trained Expertise", text: "Advanced training in hematology and bone marrow transplantation from leading global institutions." },
  { icon: Microscope, title: "Cutting-Edge Therapies", text: "Access to CAR-T cell therapy, targeted immunotherapy and precision protocols." },
  { icon: HeartHandshake, title: "Patient-First Care", text: "Compassionate, unhurried consultations with clear explanations and shared decisions." },
  { icon: Globe2, title: "International Second Opinions", text: "Collaborations with global cancer centres for complex and rare cases." },
  { icon: Users, title: "Multidisciplinary Team", text: "Coordinated care with pathologists, radiologists, transplant nurses and counsellors." },
  { icon: ShieldCheck, title: "Evidence-Based Protocols", text: "Treatment plans grounded in the latest international clinical guidelines." },
];

export const WhyChoose = () => {
  return (
    <Section
      id="about"
      eyebrow="Why Choose Us"
      title="Why patients trust Dr. Narendra Agrawal"
      subtitle="Every treatment plan is built around your diagnosis, your goals and your quality of life — not a template."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-smooth group-hover:bg-gradient-accent group-hover:text-accent-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default WhyChoose;