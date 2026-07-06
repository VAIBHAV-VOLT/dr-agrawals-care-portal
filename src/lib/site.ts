export const site = {
  doctor: {
    name: "Dr. Narendra Agrawal",
    title: "Consultant Hematologist & Blood Cancer Specialist",
    tagline:
      "Advanced, compassionate care in Bone Marrow Transplant, CAR-T Cell Therapy, Immunotherapy and Blood Disorders.",
  },
  contact: {
    phone: "+91 98687 64808",
    whatsapp: "919868764808",
    email: "care@drnarendraagrawal.com",
    address: "Rajiv Gandhi Cancer Institute, Sector V, Rohini, New Delhi",
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