import ItensLogo from "./components/itensLogo";
import { Element } from "react-scroll";
import reactLogo from "./assets/react.svg";
import nodeJsLogo from "./assets/nodeJs_logo.svg";
import javaScriptLogo from "./assets/javaScrip-logo.svg";
import TypescriptLogo from "./assets/typeScript-logo.svg";
import htmlLogo from "./assets/html-logo.svg";
import cssLogo from "./assets/css-logo.svg";
import bootstrap from "./assets/bootstrap-logo.svg";
import tailwindcss from "./assets/tailwindcss_logo.svg";
import git from "./assets/git-logo.svg";
import gitHub from "./assets/github-logo.svg";

function Skills() {
  return (
    <section className=" px-[11%] py-5 mx-auto flex flex-col justify-center text-white bg-[#161616]">
      <Element name="Skills">
        <h2 className="text-linearGren text-2xl mb-5">Skills ( )</h2>
      </Element>

      <div className="mb-6 flex gap-8 flex-wrap">
        <ItensLogo
          name="JavaScript"
          src={javaScriptLogo}
          title="javaScript"
          alt="logo javaSvript"
        />

        <ItensLogo name="Html" src={htmlLogo} title="Html" alt="logo HTML" />

        <ItensLogo name="CSS" src={cssLogo} title="CSS" alt="logo CSS" />

        <ItensLogo
          name="Typescript"
          src={TypescriptLogo}
          title="Typescript"
          alt="logo Typescript"
        />

        <ItensLogo
          name="React"
          src={reactLogo}
          title="React"
          alt="logo React"
        />

        <ItensLogo
          name="node.js"
          src={nodeJsLogo}
          title="node.js"
          alt="logo node.js"
        />

        <ItensLogo
          name="tailwind"
          src={tailwindcss}
          title="tailwindcss"
          alt="logo tailwindcss"
        />

        <ItensLogo
          name="bootstrap"
          src={bootstrap}
          title="bootstrap"
          alt="logo bootstrap"
        />

        <ItensLogo name="git" src={git} title="git" alt="logo git" />

        <ItensLogo
          name="gitHub"
          src={gitHub}
          title="gitHub"
          alt="logo gitHub"
        />
      </div>
    </section>
  );
}

export default Skills;
