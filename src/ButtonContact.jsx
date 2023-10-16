import { useState } from "react";
import Modal from "./Modal";
import emailLogo from "./assets/Email-logo.svg";
import menu from "./assets/menu.svg";

function ButtonContact() {
  const [modal, setModal] = useState(false);

  const activeModal = () => {
    setModal(true);
  };
  document.addEventListener("close", () => {
    setModal(false);
  });

  const width = window.innerWidth;
  const maxWidth = width <= 500;

  return (
    <>
      <button className="flex gap-2 items-center text-xl" onClick={activeModal}>
        <img className="h-[30px]" src={maxWidth ? menu : emailLogo} />
        {maxWidth ? null : "Contact me"}
      </button>
      {modal && <Modal />}
    </>
  );
}

export default ButtonContact;
