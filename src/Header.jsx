import Typical from "react-typical";
import myAvatar from "./assets/My-avatar.png";
import reactLogo from "./assets/react.svg";
import nodeJsLogo from "./assets/nodeJs_logo.svg";
import javaScriptLogo from "./assets/javaScrip-logo.svg";

function Header() {
  return (
    <header className="flex py-5 sm:py-10  md:py-20 px-2 sm:px-4 justify-around flex-wrap sm:gap-7 miniphon:gap-7 mb-16 mt-16 miniphon:mt-5">
      <div className="text-white flex flex-col sm:gap-2 justify-center">
        <p className="sm:text-2xl">Hello, i am</p>

        <h1 className=" text-linearGren xl:text-6xl miniphon:text-4xl  sm:text-5xl">
          &lt; Kauan silva /&gt;
        </h1>

        <h2 className="xl:text-5xl miniphon:text-3xl  sm:text-4xl">
          <Typical loop={1} steps={[" ", 1000, "Developer Front-end", 2000]} />
        </h2>

        <ul className="flex miniphon:flex-col miniphon:gap-2 flex-wrap gap-16 text-[#6A6A6A]">
          <li className="text-5xl w-20 flex gap-2 miniphon:text-4xl  sm:text-4xl">
            2<spam className="text-xl leading-none">years of experience</spam>
          </li>

          <li className="text-5xl w-52 flex  gap-2 miniphon:text-4xl sm:text-4xl">
            4
            <spam className="text-xl leading-none">
              Projects Completed around the world
            </spam>
          </li>
        </ul>
      </div>

      <div className=" bg-ImgHead rounded-full p-6 relative miniphon:h-[300px] miniphon:w-[300px] sm:h-[350px] sm:w-[350px] md:h-[350px] md:w-[350px]  lg:h-[400px] lg:w-[400px]">
        <div className="bg-ImgHeadBG miniphon:h-12 miniphon:w-12 h-16 w-16 rounded-full flex justify-center absolute bottom-[55px] left-2">
          <img className="w-3/4" src={reactLogo} alt="react logo" />
        </div>

        <div className="bg-ImgHeadBG miniphon:h-12 miniphon:w-12  h-16 w-16 rounded-full flex justify-center absolute bottom-[55px] miniphon:right-1 right-2">
          <img className="w-3/5" src={javaScriptLogo} alt="javaScript logo" />
        </div>

        <div className="bg-ImgHeadBG miniphon:h-12 miniphon:w-12 h-16 w-16 rounded-full flex justify-center absolute miniphon:right-4 right-8">
          <img className="w-3/4" src={nodeJsLogo} alt="Node.JS logo" />
        </div>

        <img className="z-0" src={myAvatar} alt="meu avatar" />
      </div>
    </header>
  );
}

export default Header;
