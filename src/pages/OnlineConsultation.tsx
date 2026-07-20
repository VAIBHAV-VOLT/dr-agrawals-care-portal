import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import StepIndicator from "@/components/booking/StepIndicator";
import Overview from "@/components/booking/steps/Overview";
import DateSelect from "@/components/booking/steps/DateSelect";
import TimeSelect from "@/components/booking/steps/TimeSelect";
import PatientInfo from "@/components/booking/steps/PatientInfo";
import MedicalInfo from "@/components/booking/steps/MedicalInfo";
import Review from "@/components/booking/steps/Review";
import Payment from "@/components/booking/steps/Payment";
import Success from "@/components/booking/steps/Success";
import { emptyBooking, STEPS, type BookingData, type StepProps } from "@/components/booking/types";

const OnlineConsultation = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BookingData>(emptyBooking);

  const update = (patch: Partial<BookingData>) => setData((d) => ({ ...d, ...patch }));
  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const goTo = (i: number) => setStep(Math.max(0, Math.min(i, STEPS.length - 1)));

  const stepProps: StepProps = { data, update, next, back, goTo };

  const Steps = [Overview, DateSelect, TimeSelect, PatientInfo, MedicalInfo, Review, Payment, Success];
  const Current = Steps[step];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container-tight max-w-4xl">
          {step < STEPS.length - 1 && (
            <div className="mb-6">
              <Link to="/appointment" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-smooth">
                <ArrowLeft className="h-4 w-4" /> Back to booking options
              </Link>
            </div>
          )}

          <div className="mb-10">
            <StepIndicator current={step} />
          </div>

          <Current {...stepProps} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OnlineConsultation;