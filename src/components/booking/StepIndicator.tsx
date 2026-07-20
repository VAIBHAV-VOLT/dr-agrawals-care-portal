import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { STEPS } from "./types";

export const StepIndicator = ({ current }: { current: number }) => {
  return (
    <div className="w-full">
      {/* Desktop */}
      <ol className="hidden md:flex items-center gap-2">
        {STEPS.map((label, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <li key={label} className="flex items-center gap-2 flex-1 last:flex-initial">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-smooth",
                    done && "bg-accent text-accent-foreground",
                    active && "bg-primary text-primary-foreground shadow-glow",
                    !done && !active && "bg-secondary text-muted-foreground",
                  )}
                >
                  {done ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span
                  className={cn(
                    "text-xs font-medium whitespace-nowrap",
                    active ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={cn(
                    "h-px flex-1 transition-smooth",
                    done ? "bg-accent" : "bg-border",
                  )}
                />
              )}
            </li>
          );
        })}
      </ol>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Step {current + 1} of {STEPS.length}
          </span>
          <span className="text-sm font-medium text-primary">{STEPS[current]}</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full bg-gradient-accent transition-smooth"
            style={{ width: `${((current + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;