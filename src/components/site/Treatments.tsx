import { Dna, FlaskConical, Syringe, HeartPulse, Layers, Sparkles } from "lucide-react";
import Section from "./Section";

const treatments = [
  { icon: Layers, title: "Bone Marrow Transplant", text: "Allogeneic, autologous and haploidentical transplants for leukemia, lymphoma and myeloma." },
  { icon: Dna, title: "CAR-T Cell Therapy", text: "Next-generation cellular therapy for relapsed and refractory blood cancers." },
  { icon: Syringe, title: "Immunotherapy", text: "Monoclonal antibodies, bispecifics and checkpoint inhibitors tailored to your disease." },
  { icon: FlaskConical, title: "Targeted Therapy", text: "Precision drug regimens guided by molecular and cytogenetic profiling." },
  { icon: HeartPulse, title: "Blood Disorder Management", text: "Comprehensive care for anemia, thalassemia, hemophilia and clotting disorders." },
  { icon: Sparkles, title: "Clinical Trials Access", text: "Curated access to global trials for eligible patients seeking novel therapies." },
];

export const Treatments = () => {
  return (
    <Section
      id="treatments"
      eyebrow="Advanced Treatments"
      title="Precision therapies for complex blood cancers"
      subtitle="A full spectrum of modern hematology care — from first diagnosis to survivorship."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {treatments.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground shadow-glow">
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

export default Treatments;