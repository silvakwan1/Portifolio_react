import Itens from "./components/Itens";
import ItensImage from "./components/ItensImage";
import LogoGithub from "./assets/github-logo.svg";
import Logolinkedin from "./assets/linkedin-logo.svg";
import EmailComponent from "./components/EmailComponet";

function Footer() {
  const urlAPIWhatsApp =
    "https://wa.me/5561996291203?text=oii%20queria%20fazer%20um%20or%C3%A7amento";
  const urlLinkedin = "https://www.linkedin.com/in/silva-kauan/";
  const urlGithub = "https://github.com/silvakwan1";

  return (
    <footer>
      <nav className="flex items-center justify-between flex-wrap px-7 py-7 md:gap-5 minsp:flex-col minsp:gap-4 text-[#fff]  bg-[#161616]">
        <h2 className=" text-5xl cursor-pointer text-[#828282]">
          {" "}
          Kauan<span className="text-4xl text-[#F2F2F2]">dev</span>
        </h2>

        <ul className="flex items-center gap-5">
          <Itens item="About" to="AboultMe" />
          <Itens item="Skills" to="Skills" />
          <Itens item="Projects" to="Project" />
        </ul>

        <ul className="flex gap-3 minsp:flex-col-reverse flex-wrap-reverse">
          <ItensImage
            href={urlLinkedin}
            alt="Logo do linkedin"
            src={Logolinkedin}
            item="Linkedin"
          />
          <ItensImage
            href={urlGithub}
            alt="Logo do Github"
            src={LogoGithub}
            item="Github"
          />
          <li>
            <EmailComponent />
          </li>
          <li>
            <a
              className=" inline-block text-xl"
              href={urlAPIWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
            >
              (61) 996291203
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
