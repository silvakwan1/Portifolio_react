import EmailComponet from "./components/EmailComponet";
import { useState } from "react";
import close from "./assets/close.svg";
import ItensImage from "./components/ItensImage";
import LogoGithub from "./assets/github-logo.svg";
import Logolinkedin from "./assets/linkedin-logo.svg";
const Modal = () => {
  const [copy, setCopy] = useState(false);

  document.addEventListener("copy", () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 4000);
  });

  const creatEvent = () => {
    const event = new Event("close");
    document.dispatchEvent(event);
  };

  const urlAPIWhatsApp =
    "https://wa.me/5561996291203?text=oii%20queria%20fazer%20um%20or%C3%A7amento";

  const preventModalClick = (e) => {
    e.stopPropagation();
  };

  const urlLinkedin = "https://www.linkedin.com/in/silva-kauan/";
  const urlGithub = "https://github.com/silvakwan1";

  const width = window.innerWidth;
  const maxWidth = width <= 700;

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
    <div
      className="top-0 left-0 w-full h-full fixed backdrop-blur-sm z-50 "
      onClick={creatEvent}
    >
      <div
        className="modal z-10 py-7 px-10 flex flex-col h-80 w-96 miniphon:w-80 absolute bg-modal top-0 right-0 rounded-bl-xl"
        onClick={preventModalClick}
      >
        <button
          className="absolute top-2 right-3 p-1 border-solid border-2 border-black rounded-full"
          onClick={creatEvent}
        >
          <img className="h-8" src={close} alt="Fechar" />
        </button>
        <ul className="flex flex-col gap-3">
          <li>
            <EmailComponet classAlt="" />
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
          {maxWidth ? renderIfWidthSm() : null}
        </ul>
        {copy && (
          <p className="w-32 mx-auto mt-14 uppercase py-1 text-center border-double border-4 text-xl ">
            copiado
          </p>
        )}
      </div>
    </div>
  );
};

export default Modal;
