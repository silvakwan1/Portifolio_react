export interface TechCategory {
  id: string;
  name: string;
  summary: string;
  items: string[];
}

export const TECH_STACK: TechCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    summary: "Interfaces modernas, acessíveis e otimizadas para conversão.",
    items: ["React", "Next.js", "TypeScript", "HTML", "CSS"],
  },
  {
    id: "mobile",
    name: "Mobile",
    summary: "Aplicativos multiplataforma com experiência fluida para usuários.",
    items: ["React Native", "Expo"],
  },
  {
    id: "backend",
    name: "Backend",
    summary: "Regras de negócio seguras, rápidas e integradas via REST.",
    items: ["Node.js", "Fastify", "PHP", "Laravel", "Python", "APIs REST"],
  },
  {
    id: "data-infra",
    name: "Banco de dados e infraestrutura",
    summary: "Persistência confiável, modelagem tipada e serviços em nuvem.",
    items: ["PostgreSQL", "Prisma", "Supabase", "Firebase"],
  },
];
