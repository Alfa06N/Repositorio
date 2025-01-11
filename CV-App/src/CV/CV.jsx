import "./CV.css";
import Header from "./section-cv/Header";
import Experience from "./section-cv/Experience";
import Skills from "./section-cv/Skills";
import Education from "./section-cv/Education";
import About from "./section-cv/About";
import { useFormData } from "../App";

export default function CV() {
  return (
    <article className="cv">
      <Header />
      <section className="cv-body">
        {/* Principal content */}
        <article className="cv-main-content">
          <article className="cv-general-info">
            <About />
          </article>
          <article className="cv-experience-info">
            <Experience />
          </article>
        </article>

        {/* Side content */}
        <aside className="cv-right-side">
          <article className="cv-education-info">
            <Education />
          </article>
          <article className="cv-skills-info">
            <Skills />
          </article>
        </aside>
      </section>
    </article>
  );
}
