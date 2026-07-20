import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import type { StepProps } from "../types";

const isUnavailable = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (date < today) return true;
  if (date.getDay() === 0) return true;
  const max = new Date();
  max.setDate(max.getDate() + 60);
  if (date > max) return true;
  return false;
};

export const DateSelect = ({ data, update, next, back }: StepProps) => {
  return (
    <div className="animate-fade-in">
      <div className="rounded-3xl bg-card border border-border shadow-card p-6 md:p-10">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold">Step 2</p>
          <h2 className="mt-1 font-serif text-2xl md:text-3xl font-semibold text-primary">
            Choose a date
          </h2>
          <p className="mt-2 text-muted-foreground">
            Sundays and past dates are unavailable. Slots open up to 60 days ahead.
          </p>
        </div>

        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={data.date}
            onSelect={(d) => update({ date: d ?? undefined })}
            disabled={isUnavailable}
            className={cn("rounded-2xl border border-border p-3 pointer-events-auto")}
          />
        </div>

        <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-between gap-3">
          <Button variant="outline" size="lg" onClick={back}>
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <Button variant="hero" size="lg" onClick={next} disabled={!data.date}>
            Continue <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DateSelect;