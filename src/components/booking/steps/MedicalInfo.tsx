import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Upload, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { StepProps } from "../types";

const ACCEPT = ".pdf,.jpg,.jpeg,.png";
const MAX_FILES = 5;
const MAX_SIZE = 8 * 1024 * 1024;

export const MedicalInfo = ({ data, update, next, back }: StepProps) => {
  const m = data.medical;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const inputRef = useRef<HTMLInputElement>(null);

  const set = (k: keyof typeof m, v: string) =>
    update({ medical: { ...m, [k]: v } });

  const addFiles = (files: FileList | null) => {
    if (!files) return;
    const accepted: File[] = [...m.files];
    let error = "";
    Array.from(files).forEach((f) => {
      if (accepted.length >= MAX_FILES) { error = `Max ${MAX_FILES} files`; return; }
      if (f.size > MAX_SIZE) { error = `${f.name} exceeds 8MB`; return; }
      accepted.push(f);
    });
    update({ medical: { ...m, files: accepted } });
    setErrors((e) => ({ ...e, files: error }));
  };

  const removeFile = (idx: number) => {
    update({ medical: { ...m, files: m.files.filter((_, i) => i !== idx) } });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!m.reason.trim()) e.reason = "Please describe the reason";
    if (!m.symptoms.trim()) e.symptoms = "Please describe symptoms";
    setErrors((prev) => ({ ...prev, ...e }));
    return !e.reason && !e.symptoms;
  };

  return (
    <div className="animate-fade-in">
      <div className="rounded-3xl bg-card border border-border shadow-card p-6 md:p-10">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold">Step 5</p>
          <h2 className="mt-1 font-serif text-2xl md:text-3xl font-semibold text-primary">
            Medical information
          </h2>
          <p className="mt-2 text-muted-foreground">Share details so Dr. Agrawal can prepare.</p>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for consultation *</Label>
            <Textarea id="reason" rows={2} value={m.reason} onChange={(e) => set("reason", e.target.value)}
              placeholder="e.g., Second opinion on recent CBC results" />
            {errors.reason && <p className="text-xs text-crimson">{errors.reason}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="symptoms">Symptoms *</Label>
            <Textarea id="symptoms" rows={3} value={m.symptoms} onChange={(e) => set("symptoms", e.target.value)}
              placeholder="Describe symptoms and how long you've had them" />
            {errors.symptoms && <p className="text-xs text-crimson">{errors.symptoms}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="medications">Current medications</Label>
            <Textarea id="medications" rows={2} value={m.medications} onChange={(e) => set("medications", e.target.value)}
              placeholder="Include dosages if possible" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="diagnosis">Previous diagnosis</Label>
            <Textarea id="diagnosis" rows={2} value={m.diagnosis} onChange={(e) => set("diagnosis", e.target.value)}
              placeholder="Any prior diagnoses or ongoing conditions" />
          </div>

          <div className="space-y-2">
            <Label>Upload medical reports</Label>
            <div
              onClick={() => inputRef.current?.click()}
              className="rounded-2xl border-2 border-dashed border-border bg-secondary/30 p-8 text-center cursor-pointer hover:border-accent transition-smooth"
            >
              <Upload className="mx-auto h-8 w-8 text-accent" />
              <p className="mt-3 text-sm font-medium text-primary">Click to upload PDF, JPG or PNG</p>
              <p className="text-xs text-muted-foreground">Up to {MAX_FILES} files, 8MB each</p>
              <input
                ref={inputRef}
                type="file"
                multiple
                accept={ACCEPT}
                className="hidden"
                onChange={(e) => { addFiles(e.target.files); e.target.value = ""; }}
              />
            </div>
            {errors.files && <p className="text-xs text-crimson">{errors.files}</p>}
            {m.files.length > 0 && (
              <ul className="mt-3 space-y-2">
                {m.files.map((f, i) => (
                  <li key={i} className="flex items-center justify-between rounded-xl bg-secondary/50 px-4 py-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <FileText className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm truncate">{f.name}</span>
                      <span className="text-xs text-muted-foreground shrink-0">
                        {(f.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                    </div>
                    <button
                      onClick={() => removeFile(i)}
                      className="text-muted-foreground hover:text-crimson"
                      aria-label="Remove file"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-between gap-3">
          <Button variant="outline" size="lg" onClick={back}>
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <Button variant="hero" size="lg" onClick={() => validate() && next()}>
            Continue <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MedicalInfo;