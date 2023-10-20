import { Element } from "react-scroll";

function AboultMe() {
  return (
    <>
      <section className=" flex justify-center sm:gap-[10%] lg:gap-[20%] flex-col md:flex-row w-10/12 mx-auto text-white">
        <div className="w-full md:w-9/12 lg:w-1/2">
          <Element name="AboultMe">
            <h2 className="text-linearGren text-2xl mb-3">AboultMe ( )</h2>
          </Element>

          <p className="text-xl mb-10">
            Olá, sou Kauan, um desenvolvedor front-end com 2 anos de
            experiência. Completei cursos de qualidade, como DevMídia, DIO.me,
            Rocketseat e Ada School. Sou apaixonado por criar interfaces
            incríveis com HTML, CSS e JavaScript. Estou pronto para colaborar em
            projetos desafiadores e ajudar a transformar sua visão em realidade.
            Entre em contato para discutir oportunidades!
          </p>
        </div>

        <div className="flex flex-col justify-center gap-2 mb-5">
          <div className="bg-[#222] shadow-lg shadow-slate-500 rounded-xl px-5 py-3 relative">
            <p className="whitespace-nowrap mr-10 text-2xl">
              Developer Front-end
            </p>

            <span className="absolute right-3 top-1/3 text-2xl text-linearGren">
              {" "}
              &lt;/&gt;
            </span>

            <span className="block text-linearGren text-[12px]  underline">
              Projects
            </span>
          </div>

          <div className="bg-[#222]  shadow-lg shadow-slate-500 rounded-xl px-5 py-3 relative">
            <p className="whitespace-nowrap mr-10 text-2xl">Freelancer</p>

            <span className="absolute right-3 top-1/3 text-2xl text-linearGren">
              {"{ "}
              {"}"}
            </span>
            <span className="block text-linearGren text-[12px] underline">
              Hire me!
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboultMe;
