import Header from "../Sections/Header";
import About from "../Sections/About";
import Projects from "../Sections/Projects";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";
import Home from "../Sections/Home";

function Layout() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Layout;
