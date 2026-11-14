export const siteConfig = {
  brandPrimary: "GiantGentlePaws",
  brandSecondary: "Maine Coons",
  fullName: "GiantGentlePaws Maine Coons",
  description:
    "Pedigree European Giant Maine Coons, based in Brisbane, Queensland.",
  phone: "(347) 829-7678",
  phoneTel: "+13478297678",
  whatsappNumber: "13478297678",
};

const WHATSAPP_MESSAGE =
  "Hi! I'm interested in learning more about your Maine Coon kittens. Could you please share more details and current availability? Thank you!";

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
