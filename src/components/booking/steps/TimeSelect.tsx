import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { StepProps } from "../types";

const SLOTS = [
  "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM",
];

export const TimeSelect = ({ data, update, next, back }: StepProps) => {
  return (
    <div className="animate-fade-in">
      <div className="rounded-3xl bg-card border border-border shadow-card p-6 md:p-10">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold">Step 3</p>
          <h2 className="mt-1 font-serif text-2xl md:text-3xl font-semibold text-primary">
            Select a time slot
          </h2>
          <p className="mt-2 text-muted-foreground">
            {data.date
              ? `Available slots for ${data.date.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" })}`
              : "Select a date first."}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {SLOTS.map((slot) => {
            const active = data.timeSlot === slot;
            return (
              <button
                key={slot}
                type="button"
                onClick={() => update({ timeSlot: slot })}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-xl border px-4 py-4 text-sm font-medium transition-smooth",
                  active
                    ? "border-accent bg-accent text-accent-foreground shadow-glow"
                    : "border-border bg-card text-foreground hover:border-accent hover:text-accent",
                )}
              >
                <Clock className="h-4 w-4" />
                {slot}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-between gap-3">
          <Button variant="outline" size="lg" onClick={back}>
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <Button variant="hero" size="lg" onClick={next} disabled={!data.timeSlot}>
            Continue <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimeSelect;