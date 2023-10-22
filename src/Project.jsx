import { Element } from "react-scroll";
import ProjectCard from "./components/ProjectCard";

import imgHbo from "/src/assets/img-progect/img-hbo.jpeg";
import imgCard from "/src/assets/img-progect/img-card.jpeg";
import imgcalculater from "/src/assets/img-progect/img-calculadora.jpeg";

function Project() {
  return (
    <section className="  py-5 mx-auto flex flex-col justify-center text-white ">
      <Element name="Project">
        <h2 className="px-[11%] text-linearGren text-2xl mb-5">Project ( )</h2>
      </Element>

      <div className="mb-10  grid grid-cols-cardResponsiva justify-center gap-5 px-8 sp:grid-cols-cardResponsiva2">
        <ProjectCard
          srcImg={imgHbo}
          alt="img do site hbo"
          title="Clone do HBO max"
          description="Explore o clone do HBO Max, criado com HTML e CSS. criado como o melhor do css3 eo melhor do HTML5."
          tech="HTML, CSS"
          urlCode="https://github.com/silvakwan1/HBOmax"
          urlPreview="https://silvakwan1.github.io/HBOmax/"
        />

        <ProjectCard
          title="Api de fazes motivacional"
          description="Nossa API Node.js fornece frases motivacionais aleatórias para inspirar e motivar seus usuários. Integre facilmente em seus aplicativos para promover positividade e bem-estar."
          tech=" JavaScript, node.js"
          urlCode="https://github.com/silvakwan1/api-mensagem"
          urlPreview="https://api-mensagem.vercel.app/api/motivational"
        />
        <ProjectCard
          srcImg={imgCard}
          alt="img do site card cred"
          title="verificador de cartão"
          description="Fiz um formulário que verifica se o número do cartão de crédito é válido."
          tech="HTML,CSS e JavaScript"
          urlCode="https://github.com/silvakwan1/card-credt"
          urlPreview="https://silvakwan1.github.io/card-credt/"
        />
        <ProjectCard
          srcImg={imgcalculater}
          alt="img do site calculadora"
          title="calculadora"
          description="A nossa Calculadora Web Interativa, desenvolvida com HTML, CSS e JavaScript, é uma ferramenta prática para resolver uma ampla gama de cálculos."
          tech="HTML,CSS e JavaScript"
          urlCode="https://github.com/silvakwan1/calculator"
          urlPreview="https://silvakwan1.github.io/calculator/"
        />
      </div>
    </section>
  );
}

export default Project;
