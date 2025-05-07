import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Button from "./components/Button";
import Eyes from "./components/Eyes";
import SpotlightSection from "./components/SpotlightSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="hidden lg:block bg-deep-maroon py-8 pb-20">
        <div className="flex justify-between px-[188px]">
          <div>
            <Button href="https://github.com/built-by-ann">check out my github!</Button>
          </div>
          <div className="mr-[0px]">
            <Button href="/resume.pdf">download my resume!</Button>
          </div>
        </div>
      </section>
      {/* Mobile buttons */}
      <div className="flex flex-col gap-4 lg:hidden items-center px-6 pb-20 bg-deep-maroon">
        <Button href="https://github.com/yourusername">check out my github!</Button>
        <Button href="/resume.pdf">download my resume!</Button>
      </div>
      <Eyes />
      <SpotlightSection />
      <Footer />
    </>
  );
}

export default App;
