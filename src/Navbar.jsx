import Itens from "./components/Itens";
import ItensImage from "./components/ItensImage";
import LogoGithub from "./assets/github-logo.svg";
import Logolinkedin from "./assets/linkedin-logo.svg";
import ButtonContact from "./ButtonContact";

function Navbar() {
  const urlLinkedin = "https://www.linkedin.com/in/silva-kauan/";
  const urlGithub = "https://github.com/silvakwan1";

  const width = window.innerWidth;
  const maxWidth = width >= 700;

  const renderIfWidthSm = () => {
    return (
      <>
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
      </>
    );
  };

  return (
    <nav className="flex items-center justify-between px-7 miniphon:px-5 h-16 text-[#fff]">
      <h2 className=" text-4xl cursor-pointer text-[#828282] logo:hidden">
        Kauan<span className="text-3xl text-[#F2F2F2]">dev</span>
      </h2>

      <ul className="flex items-center gap-5 ">
        <Itens item="About" to="AboultMe" />
        <Itens item="Skills" to="Skills" />
        <Itens item="Projects" to="Project" />
      </ul>

      <ul className="flex gap-5 ">
        {maxWidth ? renderIfWidthSm() : null}
        <li className="border-solid border-2 px-2 rounded-md border-linearGren ">
          <ButtonContact />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
