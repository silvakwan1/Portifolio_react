export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  repoUrl?: string;
  secondaryLink?: ProjectLink;
  isConceptualDemo?: boolean;
  featured: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "futmundi",
    title: "Futmundi",
    category: "Plataforma & App Mobile",
    description:
      "Jogo de palpites e estratégia de futebol com ligas competitivas (Futligas), mecânicas de Alavancagens e Seguros, rankings e premiações.",
    problem:
      "Jogos tradicionais de palpites dependem apenas de sorte pontual, sem recursos estratégicos ou gestão estruturada de ligas entre amigos e comunidades.",
    solution:
      "Plataforma digital com fluxo simples de palpites nos principais campeonatos, camada estratégica de Alavancagens e Seguros, Futligas e aplicativo publicado na Google Play.",
    technologies: ["Next.js", "React", "Android (Google Play)"],
    image: "/images/projects/futmundi.png",
    imageAlt:
      "Captura de tela da página inicial do Futmundi exibindo a proposta de jogo de palpites e estratégia de futebol",
    liveUrl: "https://futmundi.com/",
    secondaryLink: {
      label: "Google Play",
      url: "https://play.google.com/store/apps/details?id=com.futmundi.app",
    },
    featured: true,
  },
  {
    id: "mensalize",
    title: "Mensalize",
    category: "Sistema Web Financeiro",
    description:
      "Sistema web de controle financeiro e amortização de dívidas que consolida salário, assinaturas, contas recorrentes e parcelas em um fluxo temporal.",
    problem:
      "Planilhas manuais e apps genéricos dificultam enxergar quanto do salário realmente sobra ao longo dos meses, lidar com pagamentos parciais ou adiar contas sem duplicidade.",
    solution:
      "Painel com linha transversal de salário vs. gastos reais, abatimento de pagamento parcial, adiamento em um clique sem duplicar registros e isolamento de dados com Row Level Security (RLS).",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
    ],
    image: "/images/projects/mensalize.png",
    imageAlt:
      "Captura de tela da página inicial do Mensalize mostrando o sistema de controle financeiro e curva de quitação",
    liveUrl: "https://mensalize-lac.vercel.app/",
    featured: true,
  },
  {
    id: "skillpack-cli",
    title: "skillpack-cli (silvakwan1/skillpack-cli)",
    category: "CLI & Ferramenta Open Source",
    description:
      "CLI que cria e mantém a pasta .agents do seu projeto, com regras (AGENTS.md/SKILL.md) específicas por framework — Next.js, Laravel e outros — pra padronizar como agentes de IA (Claude, Cursor, Copilot) trabalham no seu código. Rode npx skillpack --next, --laravel etc. Pode rodar quantas vezes quiser: nunca sobrescreve customizações que você já fez.",
    problem:
      "Falta de padronização nas regras e convenções de código seguidas por agentes de IA (Claude, Cursor, Copilot) em diferentes frameworks como Next.js e Laravel.",
    solution:
      "CLI executável via npx skillpack --next, --laravel etc. que estrutura e mantém a pasta .agents com regras AGENTS.md e SKILL.md específicas por framework, preservando sempre customizações existentes.",
    technologies: ["TypeScript", "Node.js", "Next.js", "Laravel", "CLI"],
    image: "/images/projects/skillpack-cli.png",
    imageAlt:
      "Prévia visual da CLI silvakwan1/skillpack-cli padronizando a pasta .agents para Next.js, Laravel e agentes de IA",
    repoUrl: "https://github.com/silvakwan1/skillpack-cli",
    featured: false,
  },
  {
    id: "brasil-kit",
    title: "brasil-kit (silvakwan1/brasil-kit)",
    category: "Biblioteca TypeScript / JavaScript",
    description:
      "Utilitários TypeScript/JavaScript para dados brasileiros: validação e formatação de CPF, CNPJ, CEP, telefone e valores monetários.",
    problem:
      "Repetição e inconsistência ao validar e formatar manualmente documentos, endereços, telefones e moeda brasileira em projetos TypeScript e JavaScript.",
    solution:
      "Biblioteca modular e tipada em TypeScript/JavaScript com funções prontas para validação e formatação de CPF, CNPJ, CEP, telefone e valores monetários.",
    technologies: ["TypeScript", "JavaScript"],
    image: "/images/projects/brasil-kit.png",
    imageAlt:
      "Prévia visual da biblioteca silvakwan1/brasil-kit com utilitários de validação e formatação de CPF, CNPJ, CEP, telefone e valores monetários",
    repoUrl: "https://github.com/silvakwan1/brasil-kit",
    featured: false,
  },
];
