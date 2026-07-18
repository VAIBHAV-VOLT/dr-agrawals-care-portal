import { CheckCircle2 } from "lucide-react";

const highlights = [
  "18+ Years of Expertise in Hematology, Blood Cancer & Bone Marrow Transplantation",
"Trained at India's Premier Institutes — AIIMS New Delhi & SGPGIMS Lucknow",
"Specialist in Haploidentical (Half-Matched) Bone Marrow Transplantation",
"Contributed to Hundreds of National & International Research Publications",
];

export const ProfessionalHighlights = () => {
  return (
    <div className="animate-fade-in rounded-2xl border border-border bg-white p-6 shadow-card backdrop-blur-sm md:p-8">
      <ul className="flex flex-col gap-5">
        {highlights.map((text) => (
          <li
            key={text}
            className="flex items-start gap-4 text-sm leading-relaxed text-primary md:text-base"
          >
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-accent"
              aria-hidden="true"
            />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessionalHighlights;
