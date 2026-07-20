import { useState } from "react";
import { ArrowLeft, Lock, ShieldCheck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONSULTATION, type StepProps } from "../types";

export const Payment = ({ data, next, back, update }: StepProps) => {
  const [processing, setProcessing] = useState(false);

  // Placeholder for Razorpay integration. Replace with real order creation
  // + Razorpay checkout when backend is wired up.
  const handlePay = async () => {
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 1400));
    const id = "APT-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    update({ appointmentId: id });
    setProcessing(false);
    next();
  };

  return (
    <div className="animate-fade-in">
      <div className="rounded-3xl bg-card border border-border shadow-card p-6 md:p-10">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold">Step 7</p>
          <h2 className="mt-1 font-serif text-2xl md:text-3xl font-semibold text-primary">
            Payment summary
          </h2>
          <p className="mt-2 text-muted-foreground">Secure checkout via Razorpay.</p>
        </div>

        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="p-6 space-y-3 bg-secondary/30">
            <Line label="Consultation" value={CONSULTATION.type} />
            <Line
              label="Date & Time"
              value={`${data.date?.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) ?? "—"} · ${data.timeSlot ?? "—"}`}
            />
            <Line label="Patient" value={data.patient.fullName || "—"} />
          </div>
          <div className="p-6 space-y-2">
            <Line label="Consultation fee" value={`${CONSULTATION.currencySymbol}${CONSULTATION.fee.toLocaleString("en-IN")}`} />
            <Line label="Taxes" value="Included" />
            <div className="border-t border-border pt-3 mt-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-primary">Total</span>
              <span className="font-serif text-2xl font-semibold text-primary">
                {CONSULTATION.currencySymbol}{CONSULTATION.fee.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><Lock className="h-3.5 w-3.5" /> 256-bit SSL</span>
          <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> PCI DSS</span>
          <span className="inline-flex items-center gap-1"><CreditCard className="h-3.5 w-3.5" /> Cards · UPI · Netbanking</span>
        </div>

        <Button
          variant="hero"
          size="xl"
          className="mt-8 w-full"
          onClick={handlePay}
          disabled={processing}
        >
          <Lock className="h-5 w-5" />
          {processing ? "Processing…" : "Proceed to Secure Payment"}
        </Button>

        <div className="mt-4 flex justify-start">
          <Button variant="ghost" size="sm" onClick={back} disabled={processing}>
            <ArrowLeft className="h-4 w-4" /> Back to review
          </Button>
        </div>
      </div>
    </div>
  );
};

const Line = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-medium text-foreground">{value}</span>
  </div>
);

export default Payment;