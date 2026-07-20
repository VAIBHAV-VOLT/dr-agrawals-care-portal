import { Video, Clock, IndianRupee, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONSULTATION, type StepProps } from "../types";

export const Overview = ({ next }: StepProps) => {
  return (
    <div className="animate-fade-in">
      <div className="relative overflow-hidden rounded-3xl bg-card border border-border shadow-elegant">
        <div className="bg-gradient-hero p-8 md:p-10 text-primary-foreground">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <Video className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-primary-foreground/70">
                Consultation Type
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold">
                {CONSULTATION.type}
              </h2>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-10 space-y-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl bg-secondary/50 p-5">
              <Clock className="h-6 w-6 text-accent mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Duration</p>
                <p className="mt-1 font-serif text-lg font-semibold text-primary">
                  {CONSULTATION.duration}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-secondary/50 p-5">
              <IndianRupee className="h-6 w-6 text-accent mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Fee</p>
                <p className="mt-1 font-serif text-lg font-semibold text-primary">
                  {CONSULTATION.currencySymbol}
                  {CONSULTATION.fee.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">{CONSULTATION.description}</p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-accent" />
            End-to-end encrypted, HIPAA-aligned video platform.
          </div>

          <Button variant="hero" size="xl" className="w-full sm:w-auto" onClick={next}>
            Continue
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Overview;