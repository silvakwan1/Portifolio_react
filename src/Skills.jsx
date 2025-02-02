import { Element } from "react-scroll";
import ItensLogo from "./components/ItensLogo";
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

export default function Skills() {
  return (
    <section className=" px-[11%] py-5 mx-auto flex flex-col justify-center text-white bg-[#161616]">
      <Element name="Skills">
        <h2 className="text-linearGren text-2xl mb-5">Skills ( )</h2>
      </Element>

      <div className="mb-6 flex gap-8 flex-wrap">
        <ItensLogo
          imgAlt="logo javaSvript"
          imgSrc={javaScriptLogo}
          name="JavaScript"
        />

        <ItensLogo imgAlt="logo HTML" imgSrc={htmlLogo} name="HTML" />

        <ItensLogo imgAlt="logo CSS" imgSrc={cssLogo} name="CSS" />

        <ItensLogo
          imgAlt="logo TypeScript"
          imgSrc={TypescriptLogo}
          name="TypeScript"
        />

        <ItensLogo imgAlt="logo React" imgSrc={reactLogo} name="React" />

        <ItensLogo imgAlt="logo node.js" imgSrc={nodeJsLogo} name="Node.js" />

        <ItensLogo
          imgAlt="logo tailwind"
          imgSrc={tailwindcss}
          name="Tailwind"
        />

        <ItensLogo
          imgAlt="logo bootstrap"
          imgSrc={bootstrap}
          name="Bootstrap"
        />

        <ItensLogo imgAlt="logo git" imgSrc={git} name="Git" />

        <ItensLogo imgAlt="logo gitHub" imgSrc={gitHub} name="GitHub" />
      </div>
    </section>
  );
}
