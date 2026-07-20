import { CheckCircle2, Video, Download, Calendar, Clock, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONSULTATION, type StepProps } from "../types";
import { toast } from "@/hooks/use-toast";

export const Success = ({ data }: StepProps) => {
  const id = data.appointmentId ?? "APT-XXXXXX";

  const downloadReceipt = () => {
    const lines = [
      "Dr. Narendra Agrawal — Appointment Receipt",
      "==========================================",
      `Appointment ID: ${id}`,
      `Type: ${CONSULTATION.type}`,
      `Date: ${data.date?.toLocaleDateString("en-IN") ?? "-"}`,
      `Time: ${data.timeSlot ?? "-"}`,
      `Patient: ${data.patient.fullName}`,
      `Email: ${data.patient.email}`,
      `Phone: ${data.patient.phone}`,
      "",
      `Amount Paid: ${CONSULTATION.currencySymbol}${CONSULTATION.fee.toLocaleString("en-IN")}`,
      "Status: PAID",
    ].join("\n");
    const blob = new Blob([lines], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `receipt-${id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyId = async () => {
    await navigator.clipboard.writeText(id);
    toast({ title: "Copied", description: "Appointment ID copied to clipboard." });
  };

  return (
    <div className="animate-fade-in">
      <div className="rounded-3xl bg-card border border-border shadow-elegant overflow-hidden">
        <div className="bg-gradient-hero text-primary-foreground p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur animate-scale-in">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <h2 className="mt-5 font-serif text-3xl md:text-4xl font-semibold">
            Appointment confirmed
          </h2>
          <p className="mt-3 text-primary-foreground/80 max-w-md mx-auto">
            Thank you. Your online consultation has been booked. A confirmation
            with the meeting link has been sent to your email.
          </p>
        </div>

        <div className="p-8 md:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl bg-secondary/50 p-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Appointment ID</p>
              <p className="mt-1 font-mono text-lg font-semibold text-primary">{id}</p>
            </div>
            <Button variant="outline" size="sm" onClick={copyId}>
              <Copy className="h-4 w-4" /> Copy
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Info icon={Calendar} label="Date"
              value={data.date?.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" }) ?? "—"} />
            <Info icon={Clock} label="Time" value={data.timeSlot ?? "—"} />
          </div>

          <div className="rounded-2xl border border-dashed border-accent bg-accent-soft p-5">
            <div className="flex items-start gap-3">
              <Video className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-primary">Video meeting link</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your secure meeting link will be emailed 30 minutes before the consultation.
                </p>
                {/* Placeholder for real meeting URL once video integration is added. */}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button variant="hero" size="lg" className="flex-1" onClick={downloadReceipt}>
              <Download className="h-4 w-4" /> Download Receipt
            </Button>
            <Button variant="outline" size="lg" className="flex-1" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = ({ icon: Icon, label, value }: { icon: typeof Video; label: string; value: string }) => (
  <div className="flex items-start gap-3 rounded-2xl border border-border p-5">
    <Icon className="h-5 w-5 text-accent mt-0.5" />
    <div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 font-medium text-primary">{value}</p>
    </div>
  </div>
);

export default Success;