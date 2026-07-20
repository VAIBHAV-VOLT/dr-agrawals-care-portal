import { ArrowLeft, ArrowRight, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONSULTATION, type StepProps } from "../types";

const Row = ({ label, value }: { label: string; value?: React.ReactNode }) => (
  <div className="grid grid-cols-3 gap-4 py-3 border-b border-border last:border-0">
    <dt className="text-xs uppercase tracking-widest text-muted-foreground col-span-1">{label}</dt>
    <dd className="col-span-2 text-sm text-foreground">{value || <span className="text-muted-foreground">—</span>}</dd>
  </div>
);

const SectionCard = ({
  title, step, onEdit, children,
}: { title: string; step: number; onEdit: () => void; children: React.ReactNode }) => (
  <div className="rounded-2xl bg-card border border-border p-6">
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-serif text-lg font-semibold text-primary">{title}</h3>
      <button onClick={onEdit} className="inline-flex items-center gap-1 text-xs text-accent hover:underline">
        <Pencil className="h-3.5 w-3.5" /> Edit
      </button>
    </div>
    <dl>{children}</dl>
    <span className="hidden">{step}</span>
  </div>
);

export const Review = ({ data, next, back, goTo }: StepProps) => {
  const p = data.patient;
  const m = data.medical;
  return (
    <div className="animate-fade-in space-y-6">
      <div className="rounded-3xl bg-card border border-border shadow-card p-6 md:p-10">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold">Step 6</p>
          <h2 className="mt-1 font-serif text-2xl md:text-3xl font-semibold text-primary">
            Review your appointment
          </h2>
          <p className="mt-2 text-muted-foreground">Please confirm your details before payment.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <SectionCard title="Appointment" step={1} onEdit={() => goTo(1)}>
            <Row label="Type" value={CONSULTATION.type} />
            <Row label="Date" value={data.date?.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} />
            <Row label="Time" value={data.timeSlot} />
            <Row label="Duration" value={CONSULTATION.duration} />
          </SectionCard>

          <SectionCard title="Patient" step={3} onEdit={() => goTo(3)}>
            <Row label="Name" value={p.fullName} />
            <Row label="Age" value={p.age} />
            <Row label="Gender" value={p.gender} />
            <Row label="Phone" value={p.phone} />
            <Row label="Email" value={p.email} />
            <Row label="City" value={p.city} />
          </SectionCard>

          <SectionCard title="Medical" step={4} onEdit={() => goTo(4)}>
            <Row label="Reason" value={m.reason} />
            <Row label="Symptoms" value={m.symptoms} />
            <Row label="Medications" value={m.medications} />
            <Row label="Diagnosis" value={m.diagnosis} />
            <Row label="Reports" value={m.files.length ? `${m.files.length} file(s)` : "—"} />
          </SectionCard>

          <div className="rounded-2xl bg-gradient-hero text-primary-foreground p-6 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary-foreground/70">Consultation fee</p>
              <p className="mt-2 font-serif text-4xl font-semibold">
                {CONSULTATION.currencySymbol}{CONSULTATION.fee.toLocaleString("en-IN")}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Inclusive of all taxes. One-time payment for this consultation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-between gap-3">
          <Button variant="outline" size="lg" onClick={back}>
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <Button variant="hero" size="lg" onClick={next}>
            Proceed to Payment <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Review;