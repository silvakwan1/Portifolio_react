import Navbar from "./NavBar";
import Header from "./Header";
import AboultMe from "./AboutMe";
// import { Link, Element } from 'react-scroll';

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
      </main>
    </>
  );
}
// bg-gradient-to-r from-cyan-500 to-blue-500
export default App;
