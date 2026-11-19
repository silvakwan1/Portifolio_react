export const CONTACT_INFO = {
  brandName: "Silva Software",
  ownerName: "Kauan Silva",
  roleTitle: "Desenvolvedor Full Stack",
  domain: "https://devkauan.site",
  email: "silvakwan7@gmail.com",
  whatsappNumber: "5561996291203",
  whatsappDisplay: "(61) 99629-1203",
  whatsappDefaultMessage: "oii queria fazer um orçamento",
  whatsappUrl:
    "https://wa.me/5561996291203?text=oii%20queria%20fazer%20um%20or%C3%A7amento",
  linkedinUrl: "https://www.linkedin.com/in/silva-kauan/",
  githubUrl: "https://github.com/silvakwan1",
  logoPath: "/images/silva-software-logo.png",
} as const;

export function buildWhatsAppUrl(customMessage: string): string {
  const encoded = encodeURIComponent(customMessage);
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encoded}`;
}
