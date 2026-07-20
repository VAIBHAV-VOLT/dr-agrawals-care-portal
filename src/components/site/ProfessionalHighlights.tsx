import { CheckCircle2 } from "lucide-react";

const highlights = [
  "18+ years of expertise in hematology, blood cancer, and bone marrow transplantation",
  "Alumnus of India's premier institutes — AIIMS New Delhi and SGPGIMS Lucknow",
  "Specialist in haploidentical (half-matched) bone marrow transplantation",
  "Contributed to hundreds of national and international research publications",
];

export const ProfessionalHighlights = () => {
  return (
    <div className="animate-fade-in rounded-[1.5rem] border border-border/70 bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_20px_45px_-20px_rgba(15,23,42,0.25)] backdrop-blur-sm md:p-8">
      
      <ul className="flex flex-col gap-3">
        {highlights.map((text) => (
          <li
            key={text}
            className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white/80 px-4 py-3 text-sm leading-relaxed text-primary shadow-sm md:text-base"
          >
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
            </div>
            <span className="pt-1 font-medium">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessionalHighlights;
