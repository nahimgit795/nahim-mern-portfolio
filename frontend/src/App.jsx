
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Download,
  Menu,
  X,
  Code2,
  Database,
  Server,
  Sparkles,
} from "lucide-react";

const API = "http://localhost:5000/api";

const fallback = [
  {
    title: "CompareX – E-Commerce Product Comparison Website",
    description:
      "Platform to compare products across multiple e-commerce websites. Includes dynamic filters, sorting and product ratings with React, Node.js, Express and MongoDB.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    featured: true,
  },
  {
    title: "TaskManager – MERN Stack Task Management App",
    description:
      "Full-stack task management application for creating, updating and deleting tasks, with JWT authentication and session management, responsive React + Bootstrap UI and MongoDB storage.",
    stack: ["React", "Bootstrap", "Node.js", "MongoDB", "JWT"],
    featured: false,
  },
];

function App() {
  const [projects, setProjects] = useState(fallback);
  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(true);
  const [sent, setSent] = useState(false);

  // Fetch projects from Express + MongoDB
  useEffect(() => {
    axios
      .get(`${API}/projects`)
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setProjects(response.data);
        }
      })
      .catch(() => {
        console.log("Backend unavailable. Using fallback projects.");
      });
  }, []);

  // Contact form
  const submit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      await axios.post(`${API}/messages`, data);

      setSent(true);
      form.reset();

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.error("Message sending failed:", error);

      alert(
        "Backend is not connected. Please start your Node/Express server."
      );
    }
  };

  return (
    <div className={dark ? "app dark" : "app"}>

      {/* ================= NAVBAR ================= */}

      <nav className="nav">

        <a className="brand" href="#home">
          <span>N</span>
          Nahim.
        </a>

        <div className={menu ? "links open" : "links"}>
          {["About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenu(false)}
              >
                {item}
              </a>
            )
          )}
        </div>

        <div className="navActions">

          <button
            className="theme"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? "☼" : "☾"}
          </button>

          <a className="talk" href="#contact">
            Let's Talk ↗
          </a>

          <button
            className="hamb"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation"
          >
            {menu ? <X /> : <Menu />}
          </button>

        </div>

      </nav>

      <main>

        {/* ================= HERO ================= */}

        <section id="home" className="hero">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="eyebrow">
              <i></i>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <h1>
              Building <span>modern web</span> experiences that feel
              effortless.
            </h1>

            <p>
              I'm Nahim Ahmad, an aspiring MERN Stack Developer with hands-on
              experience building full-stack web applications using MongoDB,
              Express, React and Node.js.
            </p>

            <div className="actions">

              <a className="primary" href="#projects">
                View My Work
                <ArrowUpRight size={17} />
              </a>

              <a className="secondary" href="#contact">
                Contact Me
              </a>

            </div>

            <div className="stats">

              <div>
                <b>8.6</b>
                <small>B.Tech CGPA</small>
              </div>

              <div>
                <b>GATE</b>
                <small>2026 Qualified</small>
              </div>

              <div>
                <b>SIH</b>
                <small>2023 Runner-up</small>
              </div>

            </div>

          </motion.div>

          {/* CODE CARD */}

          <motion.div
            className="terminalCard"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >

            <div className="bar">
              <i></i>
              <i></i>
              <i></i>
              <span>developer.js</span>
            </div>

            <pre>
              <em>const</em> developer = {"{"}
              {"\n"} name: <b>"Nahim Ahmad"</b>,
              {"\n"} role: <b>"MERN Developer"</b>,
              {"\n"} stack: [<b>"React"</b>, <b>"Node"</b>,
              {"\n"} <b>"Express"</b>, <b>"MongoDB"</b>],
              {"\n"} mindset: <b>"Build • Learn • Improve"</b>
              {"\n"}{"}"};
            </pre>

            <div className="terminal">
              ➜ <span>npm run build-future</span> <b>_</b>
            </div>

          </motion.div>

        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="section">

          <div className="label">
            01 / ABOUT
          </div>

          <div>

            <h2>
              Developer with a <span>builder's mindset.</span>
            </h2>

            <p>
              I'm an aspiring MERN Stack Developer with hands-on experience
              building full-stack web applications. I'm skilled in responsive
              UIs, REST APIs, authentication and database integration, with a
              strong foundation in DSA and OOPS.
            </p>

            <div className="infoGrid">

              <div>
                <b>Education</b>
                <span>
                  B.Tech CSE — ABES Institute of Technology
                </span>
              </div>

              <div>
                <b>Focus</b>
                <span>
                  MERN • REST APIs • DSA
                </span>
              </div>

              <div>
                <b>CGPA</b>
                <span>
                  8.6 / 10
                </span>
              </div>

              <div>
                <b>Graduation</b>
                <span>
                  2022 — 2026
                </span>
              </div>

            </div>

          </div>

        </section>

        {/* ================= SKILLS ================= */}

        <section id="skills" className="section">

          <div className="label">
            02 / SKILLS
          </div>

          <div>

            <h2>
              My <span>toolkit.</span>
            </h2>

            <div className="skills">

              <Skill
                icon={<Code2 />}
                title="Languages"
                text="C · C++ · JavaScript"
              />

              <Skill
                icon={<Code2 />}
                title="Frameworks"
                text="React · Bootstrap · Tailwind · Express"
              />

              <Skill
                icon={<Code2 />}
                title="Web"
                text="HTML · CSS · Redux"
              />

              <Skill
                icon={<Database />}
                title="Database"
                text="MongoDB"
              />

              <Skill
                icon={<Sparkles />}
                title="Tools"
                text="Git · GitHub"
              />

              <Skill
                icon={<Server />}
                title="CS Fundamentals"
                text="DSA · OOPS · REST API Development"
              />

            </div>

          </div>

        </section>

        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section">

          <div className="label">
            03 / PROJECTS
          </div>

          <div>

            <h2>
              Things I've <span>built.</span>
            </h2>

            <div className="projects">

              {projects.map((project, index) => (

                <article
                  key={project._id || index}
                  className={
                    project.featured
                      ? "project featured"
                      : "project"
                  }
                >

                  <div className="num">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>

                    <div className="tags">

                      {(project.stack || []).map((stack) => (
                        <span key={stack}>
                          {stack}
                        </span>
                      ))}

                    </div>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo ↗
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{ marginLeft: "15px" }}
                      >
                        GitHub ↗
                      </a>
                    )}

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* ================= EXPERIENCE ================= */}

        <section id="experience" className="section">

          <div className="label">
            04 / EXPERIENCE
          </div>

          <div>

            <h2>
              Experience & <span>achievements.</span>
            </h2>

            <div className="timeline">

              <Item
                title="Web Development Intern"
                place="Code Craft · May 2025"
                text="Developed responsive front-end layouts using HTML, CSS and JavaScript; collaborated with UI/UX designers, used Git version control and worked on Node.js API integration."
              />

              <Item
                title="Virtual Internship"
                place="IBM SkillsBuild · June 2025 – July 2025"
                text="Built interactive web components and dynamic pages using React, Bootstrap, Node.js and REST API integration, with responsive design and accessibility improvements."
              />

              <Item
                title="GATE Qualified — 2026"
                place="Achievement"
                text="Qualified GATE 2026."
              />

              <Item
                title="Smart India Hackathon — Runner-up"
                place="2023 · Achievement"
                text="Runner-up in Smart India Hackathon 2023."
              />

              <Item
                title="Kho-Kho Nationals"
                place="2018 · Achievement"
                text="Represented U.P. in Kho-Kho Nationals."
              />

              <Item
                title="JavaScript Certification"
                place="GeeksforGeeks · 2025"
                text="Completed GeeksforGeeks 4-Week JavaScript Certification."
              />

            </div>

          </div>

        </section>

        {/* ================= CONTACT ================= */}

        <section id="contact" className="contact">

          <div className="eyebrow">
            <i></i>
            HAVE A PROJECT OR OPPORTUNITY?
          </div>

          <h2>
            Let's build something <span>useful.</span>
          </h2>

          <p>
            I'm open to MERN stack, software and frontend opportunities.
          </p>

          <form onSubmit={submit}>

            <input
              name="name"
              placeholder="Your name"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email address"
              required
            />

            <textarea
              name="message"
              placeholder="Tell me about the opportunity..."
              required
            ></textarea>

            <button
              className="primary"
              type="submit"
            >
              {sent ? "Message Sent ✓" : "Send Message"}
              <Mail size={16} />
            </button>

          </form>

          <div className="socials">

            {/* Add your GitHub URL here */}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/nahim-ahmad-54ba1b426/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:nahimahmad795@gmail.com">
              <Mail />
              Email
            </a>

            <a href="/Nahim_Ahmad_Resume.pdf">
              <Download />
              Resume
            </a>

          </div>

        </section>

      </main>

      <footer>
        © {new Date().getFullYear()} Nahim Ahmad · Built with React + Node +
        Express + MongoDB
      </footer>

    </div>
  );
}

/* ================= SKILL COMPONENT ================= */

const Skill = ({ icon, title, text }) => (
  <div className="skill">
    {icon}
    <b>{title}</b>
    <p>{text}</p>
  </div>
);

/* ================= EXPERIENCE COMPONENT ================= */

const Item = ({ title, place, text }) => (
  <div className="item">
    <b>{title}</b>
    <span>{place}</span>
    <p>{text}</p>
  </div>
);

export default App;
