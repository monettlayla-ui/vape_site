export const siteConfig = {
  brandPrimary: "Gentle",
  brandSecondary: "Maine Coons",
  fullName: "Gentle Maine Coons",
  description:
    "Pedigree European Giant Maine Coons, based in Brisbane, Queensland.",
  email: "gentlemaincoon@gmail.com",
  phone: "(347) 829-7678",
  phoneTel: "+13478297678",
  whatsappNumber: "13478297678",
};

const WHATSAPP_MESSAGE =
  "Hi! I'm interested in learning more about your Maine Coon kittens. Could you please share more details and current availability? Thank you!";

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
