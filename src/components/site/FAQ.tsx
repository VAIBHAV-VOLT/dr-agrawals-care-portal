import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Section from "./Section";

const faqs = [
  { q: "What conditions does Dr. Narendra Agrawal treat?", a: "All blood cancers (leukemia, lymphoma, myeloma) and benign hematology conditions including anemia, thalassemia, hemophilia and clotting disorders." },
  { q: "Is CAR-T Cell Therapy available in India?", a: "Yes. We evaluate eligibility for approved commercial and clinical-trial CAR-T therapies for relapsed and refractory blood cancers." },
  { q: "How long does a bone marrow transplant take?", a: "Typical inpatient stay is 3–5 weeks, followed by close outpatient monitoring for 3–6 months depending on the transplant type." },
  { q: "Do you offer second opinions online?", a: "Yes — WhatsApp and video consultations are available worldwide with a review of your reports." },
  { q: "Are treatments covered by insurance?", a: "Most major Indian and international insurers cover our treatments. Our team helps with pre-authorisation and paperwork." },
];

export const FAQ = () => {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Answers to common questions"
      subtitle="Have another question? Reach out — we usually reply within a few hours."
    >
      <Accordion type="single" collapsible className="mx-auto max-w-3xl">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="mb-3 rounded-2xl border border-border bg-card px-6 shadow-card"
          >
            <AccordionTrigger className="text-left font-serif text-base font-medium text-primary hover:no-underline md:text-lg">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default FAQ;