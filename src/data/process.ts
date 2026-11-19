export interface ProcessStep {
  number: string;
  label: string;
  title: string;
  description: string;
  deliverable: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    label: "01 — Entendimento",
    title: "Entendimento",
    description:
      "Mapeamos o objetivo comercial, a dor operacional que precisa ser resolvida e os fluxos essenciais para o seu negócio.",
    deliverable: "Escopo claro e prioridades definidas",
  },
  {
    number: "02",
    label: "02 — Planejamento",
    title: "Planejamento",
    description:
      "Definimos a arquitetura técnica, a modelagem de dados e a estrutura das telas antes de escrever a primeira linha de código.",
    deliverable: "Arquitetura e plano de entregas",
  },
  {
    number: "03",
    label: "03 — Desenvolvimento",
    title: "Desenvolvimento",
    description:
      "Construção do aplicativo, sistema ou API com código tipado, interface responsiva e validações contínuas de funcionamento.",
    deliverable: "Produto funcional e testado",
  },
  {
    number: "04",
    label: "04 — Entrega e evolução",
    title: "Entrega e evolução",
    description:
      "Publicação em ambiente estável, documentação essencial e acompanhamento para evoluir o sistema conforme a empresa cresce.",
    deliverable: "Deploy seguro e suporte contínuo",
  },
];
