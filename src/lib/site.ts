export const site = {
  doctor: {
    name: "Dr. Narendra Agrawal",
    title: "Consultant Hematologist & Blood Cancer Specialist",
    tagline:
      "Advanced, compassionate care in Bone Marrow Transplant, CAR-T Cell Therapy, Immunotherapy and Blood Disorders.",
  },
  contact: {
    phone: "01147022222",
    whatsapp: "-",
    email: "narendra_ag1@rediffmail.com",
    address: "Rajiv Gandhi Cancer Institute & Research Centre, Sector-5, Rohini, Delhi - 110085, India",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Treatments", href: "#treatments" },
    { label: "Diseases", href: "#diseases" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

export const whatsappLink = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
  "Hello Dr. Agrawal, I would like to book a consultation.",
)}`;