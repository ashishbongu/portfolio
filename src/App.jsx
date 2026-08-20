import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Tales from "./components/Tales";
import GalleryPage from "./components/Gallery";

function App() {
  const [isGallery, setIsGallery] = useState(() => window.location.hash === "#gallery");

  useEffect(() => {
    const updateView = () => setIsGallery(window.location.hash === "#gallery");

    window.addEventListener("hashchange", updateView);
    return () => window.removeEventListener("hashchange", updateView);
  }, []);

  if (isGallery) {
    return <GalleryPage />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tales />
    </>
  );
}

export default App;
