import { Element } from "react-scroll";

import ProjectCard from "./components/ProjectCard";

function Project() {
  return (
    <section className="  py-5 mx-auto flex flex-col justify-center text-white ">
      <Element name="Project">
        <h2 className="px-[11%] text-linearGren text-2xl mb-5">Project ( )</h2>
      </Element>
      <div className="mb-60  grid grid-cols-cardResponsiva justify-center gap-5 px-8 sp:grid-cols-cardResponsiva2">
        <ProjectCard
          srcImg=""
          title="Project Tile goes here"
          description="This is sample project description random things are here in
        description This is sample project lorem ipsum generator for dummy
        content"
          tech="HTML , JavaScript, React"
          urlCode="d"
          urlPreview="d"
        />
        <ProjectCard
          srcImg=""
          title="Project Tile goes here"
          description="This is sample project description random things are here in
        description This is sample project lorem ipsum generator for dummy
        content"
          tech="HTML , JavaScript, React"
          urlCode="d"
          urlPreview="d"
        />
        <ProjectCard
          srcImg=""
          title="Project Tile goes here"
          description="This is sample project description random things are here in
        description This is sample project lorem ipsum generator for dummy
        content"
          tech="HTML , JavaScript, React"
          urlCode="d"
          urlPreview="d"
        />
        <ProjectCard
          srcImg=""
          title="Project Tile goes here"
          description="This is sample project description random things are here in
        description This is sample project lorem ipsum generator for dummy
        content"
          tech="HTML , JavaScript, React"
          urlCode="d"
          urlPreview="d"
        />
        <ProjectCard
          srcImg=""
          title="Project Tile goes here"
          description="This is sample project description random things are here in
        description This is sample project lorem ipsum generator for dummy
        content"
          tech="HTML , JavaScript, React"
          urlCode="d"
          urlPreview="d"
        />
        <ProjectCard
          srcImg=""
          title="Project Tile goes here"
          description="This is sample project description random things are here in
        description This is sample project lorem ipsum generator for dummy
        content"
          tech="HTML , JavaScript, React"
          urlCode="d"
          urlPreview="d"
        />
      </div>
    </section>
  );
}

export default Project;
