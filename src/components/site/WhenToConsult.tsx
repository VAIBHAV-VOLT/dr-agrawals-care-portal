import { AlertCircle, Droplets, Thermometer, Activity, Bandage, HeartPulse } from "lucide-react";
import Section from "./Section";

const signs = [
  { icon: Droplets, text: "Unexplained bruising or frequent bleeding" },
  { icon: Thermometer, text: "Persistent fever or night sweats" },
  { icon: Activity, text: "Extreme fatigue that does not resolve with rest" },
  { icon: Bandage, text: "Swollen lymph nodes lasting more than 2 weeks" },
  { icon: HeartPulse, text: "Unexplained weight loss or loss of appetite" },
  { icon: AlertCircle, text: "Abnormal CBC or blood test findings" },
  { icon: Bandage, text: "Back Pain / Spine Pain / Bone Pain" },
];

export const WhenToConsult = () => {
  return (
    <Section
      id="symptoms"
      eyebrow="Know the signs"
      title="When you should consult a hematologist"
      subtitle="Early diagnosis dramatically improves outcomes. If you notice any of these symptoms, schedule a consultation."
      className="bg-gradient-soft"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {signs.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-start gap-4 rounded-2xl border border-border bg-white/80 p-5 backdrop-blur shadow-card"
          >
            <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-crimson/10 text-crimson">
              <Icon className="h-5 w-5" />
            </span>
            <p className="text-sm leading-relaxed text-foreground md:text-base">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhenToConsult;