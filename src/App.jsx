import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Tales from "./components/Tales";
import GalleryPage from "./components/Gallery";

function App() {
  const galleryPath = `${import.meta.env.BASE_URL}gallery`;

  if (window.location.pathname === galleryPath) {
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
