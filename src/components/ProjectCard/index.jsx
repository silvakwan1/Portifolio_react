import UrlIcon from "./urlIcon";

export default function ProjectCard(props) {
  const { urlCode, urlPreview, tech, description, title, srcImg, alt } = props;

  const ApiImg = () => {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#555]">
        <p className="text-7xl">API</p>
      </div>
    );
  };
  const ImgSrc = () => {
    return <img className="w-full h-full" src={srcImg} alt={alt} />;
  };

  return (
    <div className="sp:w-72 w-80 bg-slate-700 rounded-2xl flex flex-col gap-3 overflow-hidden">
      <div className="w-full h-52">{srcImg ? <ImgSrc /> : <ApiImg />}</div>
      <div className="px-4 flex flex-col gap-3">
        <h3 className="text-lg font-bold text-center">{title}</h3>
        <p>{description}</p>
        <p>Tech stack : {tech}</p>
      </div>
      <UrlIcon urlCode={urlCode} urlPreview={urlPreview} />
    </div>
  );
}
