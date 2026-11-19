import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { Differential } from "@/components/Differential";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-black)] text-[var(--color-white)]">
      <Navbar />
      <main id="conteudo-principal" className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Process />
        <Differential />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
