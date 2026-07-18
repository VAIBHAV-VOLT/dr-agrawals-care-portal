import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Fellowship-trained in Bone Marrow Transplantation from a leading international centre",
  "Over two decades of specialist experience in leukemia, lymphoma and myeloma",
  "Pioneered advanced cellular therapies including CAR-T and immunotherapy protocols",
  "Active researcher and peer-reviewed author in haematology and stem-cell transplantation",
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
