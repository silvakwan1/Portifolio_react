import UrlIcon from "./urlIcon";
import img from "./img.svg";

export default function ProjectCard({ urlCode, urlPreview }) {
  return (
    <div className="w-80 bg-black rounded-2xl flex flex-col gap-3">
      <div className="w-full">
        {/* <div className="w-full h-64"> */}
        <img className="w-full h-full" src={img} />
      </div>
      <div className="px-4 flex flex-col gap-3">
        <h3>Project Tile goes here</h3>
        <p>
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content
        </p>
        <p>Tech stack : HTML , JavaScript, SASS, React</p>
      </div>
      <UrlIcon urlCode={urlCode} urlPreview={urlPreview} />
    </div>
  );
}
