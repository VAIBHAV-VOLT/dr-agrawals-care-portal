const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "5,000+", label: "Patients Treated" },
  { value: "800+", label: "Bone Marrow Transplants" },
  { value: "40+", label: "Research Publications" },
];

export const Stats = () => {
  return (
    <section aria-label="Trust statistics" className="relative -mt-10 md:-mt-14">
      <div className="container-tight">
        <div className="rounded-2xl border border-border bg-white/95 p-6 shadow-elegant backdrop-blur md:p-10">
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-serif text-3xl font-semibold text-primary md:text-4xl">
                  {s.value}
                </dd>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Stats;