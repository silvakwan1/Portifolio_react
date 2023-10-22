import Navbar from "/src/NavBar";
import Header from "/src/Header";
import AboultMe from "/src/AboutMe";
import Skills from "/src/Skills";
import Project from "/src/project";
import Footer from "/src/footer";

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
