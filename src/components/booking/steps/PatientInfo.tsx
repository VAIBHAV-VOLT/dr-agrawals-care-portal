import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import type { StepProps } from "../types";

export const PatientInfo = ({ data, update, next, back }: StepProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const p = data.patient;

  const set = (k: keyof typeof p, v: string) =>
    update({ patient: { ...p, [k]: v } });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!p.fullName.trim()) e.fullName = "Required";
    if (!p.age || +p.age < 1 || +p.age > 120) e.age = "Enter a valid age";
    if (!p.gender) e.gender = "Required";
    if (!/^\+?\d{7,15}$/.test(p.phone.replace(/\s|-/g, ""))) e.phone = "Enter a valid phone";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) e.email = "Enter a valid email";
    if (!p.city.trim()) e.city = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validate()) next(); };

  const field = (id: string, label: string, node: React.ReactNode) => (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {node}
      {errors[id] && <p className="text-xs text-crimson">{errors[id]}</p>}
    </div>
  );

  return (
    <div className="animate-fade-in">
      <div className="rounded-3xl bg-card border border-border shadow-card p-6 md:p-10">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold">Step 4</p>
          <h2 className="mt-1 font-serif text-2xl md:text-3xl font-semibold text-primary">
            Patient information
          </h2>
          <p className="mt-2 text-muted-foreground">All fields are required.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {field("fullName", "Full Name",
            <Input id="fullName" value={p.fullName} onChange={(e) => set("fullName", e.target.value)} placeholder="Jane Doe" />)}
          {field("age", "Age",
            <Input id="age" type="number" min={1} max={120} value={p.age} onChange={(e) => set("age", e.target.value)} placeholder="42" />)}
          {field("gender", "Gender",
            <Select value={p.gender} onValueChange={(v) => set("gender", v)}>
              <SelectTrigger id="gender"><SelectValue placeholder="Select gender" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>)}
          {field("phone", "Phone Number",
            <Input id="phone" type="tel" value={p.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 98XXXXXXXX" />)}
          {field("email", "Email",
            <Input id="email" type="email" value={p.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" />)}
          {field("city", "City",
            <Input id="city" value={p.city} onChange={(e) => set("city", e.target.value)} placeholder="New Delhi" />)}
        </div>

        <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-between gap-3">
          <Button variant="outline" size="lg" onClick={back}>
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <Button variant="hero" size="lg" onClick={handleNext}>
            Continue <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;