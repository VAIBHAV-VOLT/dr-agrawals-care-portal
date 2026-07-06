import { Quote, Star } from "lucide-react";
import Section from "./Section";

const testimonials = [
  { name: "Priya S.", role: "AML survivor · Delhi", quote: "Dr. Agrawal explained every step of my bone marrow transplant with patience. Two years post-treatment, I'm back to full life." },
  { name: "Rahul M.", role: "Lymphoma patient · Mumbai", quote: "The care team's coordination and clarity through my immunotherapy was extraordinary. I never felt alone." },
  { name: "Ananya R.", role: "Family member · Bengaluru", quote: "We consulted three centres. Dr. Agrawal's plan was the most thorough, honest and hopeful. It made all the difference." },
];

export const Testimonials = () => {
  return (
    <Section
      id="testimonials"
      eyebrow="Patient stories"
      title="Real journeys. Real hope."
      subtitle="A few words from patients and families who trusted us with their care."
      className="bg-gradient-soft"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant"
          >
            <Quote className="h-8 w-8 text-accent" aria-hidden />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground md:text-base">
              "{t.quote}"
            </blockquote>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <figcaption>
                <p className="text-sm font-semibold text-primary">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
              <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
          </figure>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;