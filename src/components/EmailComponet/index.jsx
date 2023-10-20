import { useState } from "react";

function EmailComponent() {
  const [email, setEmail] = useState("kawandev07@gmail.com");

  const copyEmailToClipboard = () => {
    const input = document.createElement("input");
    input.value = email;
    document.body.appendChild(input);

    input.select();

    input.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(input);

    const copiedEvent = new Event("copy");
    document.dispatchEvent(copiedEvent);
  };

  return (
    <p
      onClick={copyEmailToClipboard}
      className="cursor-pointer inline-block text-xl"
    >
      {email}
    </p>
  );
}

export default EmailComponent;
