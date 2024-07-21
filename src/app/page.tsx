"use client";

import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

import Skills from "./components/Skills/Skills";
export default function Home() {
  return (
    <div>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
