export type BookingData = {
  date?: Date;
  timeSlot?: string;
  patient: {
    fullName: string;
    age: string;
    gender: string;
    phone: string;
    email: string;
    city: string;
  };
  medical: {
    reason: string;
    symptoms: string;
    medications: string;
    diagnosis: string;
    files: File[];
  };
  appointmentId?: string;
};

export const CONSULTATION = {
  type: "Online Video Consultation",
  duration: "10 minutes",
  fee: 2000,
  currency: "INR",
  currencySymbol: "₹",
  description:
    "A secure one-on-one video consultation with Dr. Narendra Agrawal. Discuss reports, symptoms and treatment options from the comfort of your home.",
};

export const emptyBooking: BookingData = {
  patient: { fullName: "", age: "", gender: "", phone: "", email: "", city: "" },
  medical: { reason: "", symptoms: "", medications: "", diagnosis: "", files: [] },
};

export type StepProps = {
  data: BookingData;
  update: (patch: Partial<BookingData>) => void;
  next: () => void;
  back: () => void;
  goTo: (i: number) => void;
};

export const STEPS = [
  "Overview",
  "Date",
  "Time",
  "Patient",
  "Medical",
  "Review",
  "Payment",
  "Confirmed",
];