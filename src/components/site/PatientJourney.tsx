import { ClipboardList, Search, Stethoscope, HeartPulse } from "lucide-react";
import Section from "./Section";

const steps = [
  { icon: ClipboardList, title: "Initial Consultation", text: "In-depth review of history, symptoms and prior reports." },
  { icon: Search, title: "Precise Diagnosis", text: "Advanced blood work, flow cytometry and molecular testing." },
  { icon: Stethoscope, title: "Personalised Treatment", text: "A plan tailored to your disease, age and goals." },
  { icon: HeartPulse, title: "Long-Term Follow-Up", text: "Survivorship care and continuous monitoring." },
];

export const PatientJourney = () => {
  return (
    <Section
      eyebrow="Your Journey"
      title="A clear, guided path — from first visit to recovery"
      subtitle="We remove the guesswork with a structured, transparent care pathway."
    >
      <ol className="relative grid gap-8 md:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="relative">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card h-full">
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-accent text-accent-foreground shadow-glow">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-serif text-2xl font-semibold text-primary/20">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-serif text-base font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default PatientJourney;