import Section from "./Section";

const diseases = [
  { name: "Leukemia (AML, ALL, CML, CLL)", meta: "Acute & Chronic" },
  { name: "Lymphoma (Hodgkin & Non-Hodgkin)", meta: "All subtypes" },
  { name: "Multiple Myeloma", meta: "Plasma cell disorders" },
  { name: "Myelodysplastic Syndrome (MDS)", meta: "Pre-leukemic states" },
  { name: "Aplastic Anemia", meta: "Bone marrow failure" },
  { name: "Thalassemia & Sickle Cell", meta: "Hemoglobinopathies" },
  { name: "Hemophilia & Bleeding Disorders", meta: "Coagulation" },
  { name: "ITP & Autoimmune Cytopenias", meta: "Immune disorders" },
  { name: "Deep Vein Thrombosis (DVT)", meta: "Clotting disorders" },
];

export const Diseases = () => {
  return (
    <Section
      id="diseases"
      eyebrow="Conditions"
      title="Diseases we treat"
      subtitle="Comprehensive expertise across the full spectrum of malignant and benign hematology."
      className="bg-primary text-primary-foreground"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {diseases.map((d) => (
          <div
            key={d.name}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-smooth hover:bg-white/10 hover:border-accent/50"
          >
            <p className="text-xs uppercase tracking-widest text-accent">{d.meta}</p>
            <h3 className="mt-2 font-serif text-lg font-medium text-primary-foreground">
              {d.name}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Diseases;