import Navbar from "./Navbar";
import Header from "./Header";
import AboultMe from "./AboutMe";
import Skills from "./Skills";
import Project from "./project";
import Footer from "./Footer";

function App() {
  let currentWidth = window.innerWidth;

  window.addEventListener("resize", () => {
    const newWidth = window.innerWidth;
    if (newWidth !== currentWidth) {
      currentWidth = newWidth;
      location.reload();
    }
  });

  return (
    <>
      <Navbar />
      <Header />
      <main>
        <AboultMe />
        <Skills />
        <Project />
      </main>

      <Footer />
    </>
  );
}

export default App;
