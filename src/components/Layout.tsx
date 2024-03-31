import Header from "../Sections/Header";
import About from "../Sections/About";
import Projects from "../Sections/Projects";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";
import Home from "../Sections/Home";
import ScrollUp from "./ScrollUp";
import { useState, useEffect } from "react";

function Layout() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      // 스크롤 위치가 100px 이상이면 버튼 표시, 아니면 숨김
      if (!showButton && window.scrollY > 100) {
        setShowButton(true);
      } else if (showButton && window.scrollY <= 100) {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showButton]);

  return (
    <>
      <Header />
      <ScrollUp show={showButton} />
      <div>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
