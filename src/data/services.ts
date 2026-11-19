export type ServiceIconName =
  | "smartphone"
  | "building"
  | "globe"
  | "workflow"
  | "wrench"
  | "compass";

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: ServiceIconName;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "aplicativos",
    title: "Desenvolvimento de aplicativos",
    subtitle: "iOS e Android sob medida",
    description:
      "Aplicativos móveis focados na experiência do usuário, desempenho consistente e integração direta com os fluxos da sua operação.",
    deliverables: [
      "Interfaces intuitivas para uso diário",
      "Integração com APIs e notificações",
      "Publicação orientada às lojas oficiais",
    ],
    icon: "smartphone",
  },
  {
    id: "sistemas-empresariais",
    title: "Sistemas empresariais",
    subtitle: "Gestão e automação interna",
    description:
      "Plataformas administrativas, painéis financeiros e ferramentas internas desenhadas para organizar processos reais da sua empresa.",
    deliverables: [
      "Controle de acesso e permissões",
      "Painéis operacionais e relatórios claros",
      "Regras de negócio fiéis à sua rotina",
    ],
    icon: "building",
  },
  {
    id: "desenvolvimento-web",
    title: "Desenvolvimento web",
    subtitle: "Sites comerciais e plataformas",
    description:
      "Aplicações web rápidas, responsivas e preparadas para buscadores, transformando presença digital em geração de oportunidades.",
    deliverables: [
      "Layout responsivo mobile-first",
      "SEO técnico e performance otimizada",
      "Arquitetura moderna em React e Next.js",
    ],
    icon: "globe",
  },
  {
    id: "apis-integracoes",
    title: "APIs e integrações",
    subtitle: "Comunicação segura entre sistemas",
    description:
      "Construção de back-ends estruturados e integrações REST para conectar aplicativos, bancos de dados e serviços externos com confiabilidade.",
    deliverables: [
      "Endpoints documentados e padronizados",
      "Validação de dados e autenticação",
      "Modelagem relacional escalável",
    ],
    icon: "workflow",
  },
  {
    id: "manutencao-evolucao",
    title: "Manutenção e evolução",
    subtitle: "Continuidade técnica e melhorias",
    description:
      "Acompanhamento contínuo de sistemas em produção para corrigir gargalos, atualizar dependências e entregar novas funcionalidades sem travar o negócio.",
    deliverables: [
      "Correção de bugs e refatoração segura",
      "Otimização de carregamento e responsividade",
      "Evolução incremental conforme demanda",
    ],
    icon: "wrench",
  },
  {
    id: "consultorias",
    title: "Consultorias",
    subtitle: "Arquitetura e direcionamento técnico",
    description:
      "Consultorias técnicas para apoiar decisões de arquitetura, definição de tecnologias, organização de projetos e evolução de soluções digitais.",
    deliverables: [
      "Análise técnica de sistemas e fluxos existentes",
      "Definição de arquitetura e stack para novos projetos",
      "Padronização de código e boas práticas de desenvolvimento",
    ],
    icon: "compass",
  },
];
