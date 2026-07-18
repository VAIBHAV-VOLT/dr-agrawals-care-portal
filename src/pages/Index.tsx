import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import ProfessionalHighlights from "@/components/site/ProfessionalHighlights";
import WhyChoose from "@/components/site/WhyChoose";
import WhenToConsult from "@/components/site/WhenToConsult";
import Treatments from "@/components/site/Treatments";
import Diseases from "@/components/site/Diseases";
import PatientJourney from "@/components/site/PatientJourney";
import Testimonials from "@/components/site/Testimonials";
import FAQ from "@/components/site/FAQ";
import ContactCTA from "@/components/site/ContactCTA";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <section className="py-16 md:py-20 bg-gradient-soft scroll-mt-24">
          <div className="container-tight max-w-4xl">
            <ProfessionalHighlights />
          </div>
        </section>
        <WhyChoose />
        <WhenToConsult />
        <Treatments />
        <Diseases />
        <PatientJourney />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
