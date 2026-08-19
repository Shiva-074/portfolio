import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { portfolio } from './data/portfolio';

const navItems = [
  'Home',
  'About',
  'Skills',
  'Projects',
  'Experience',
  'Education',
  'Certifications',
  'Achievements',
  'Contact',
];

const skillCategoryMeta = {
  vlsi: { title: 'VLSI & Digital Design', icon: Cpu },
  programming: { title: 'Programming', icon: Code2 },
  development: { title: 'Development', icon: Sparkles },
  tools: { title: 'Tools', icon: ShieldCheck },
  ml: { title: 'AI / ML', icon: Briefcase },
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactStatus, setShowContactStatus] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileMenuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [mobileMenuOpen]);

  const profileSummary = useMemo(
    () => ['ECE Engineer', 'VLSI & AI Enthusiast', 'Digital Designer', 'Software Developer'],
    []
  );

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const subject = (formData.get('subject') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    if (!name || !email || !subject || !message) {
      setShowContactStatus(true);
      return;
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail) {
      setShowContactStatus(true);
      return;
    }

    setShowContactStatus(true);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-midnight text-slateText">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071521]/85 backdrop-blur-xl">
        <nav className="section-shell flex items-center justify-between py-4">
          <a href="#home" className="text-sm font-semibold tracking-[0.2em] text-white uppercase">
            {portfolio.name}
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:border-accent/50 hover:bg-white/10"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:border-accent/50 hover:bg-white/10"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={portfolio.resume}
              download="PRAGADA_V_S_N_L_P_KUMAR_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-[#091926] transition hover:brightness-110"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          <button
            type="button"
            className="rounded-full border border-white/10 p-2 text-white md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#071521]/95 md:hidden">
            <div className="section-shell flex flex-col gap-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-slate-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-3">
                <a href={portfolio.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white">
                  <Github size={16} /> GitHub
                </a>
                <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href={portfolio.resume} download="PRAGADA_V_S_N_L_P_KUMAR_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white">
                  <Download size={16} /> Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="section-shell grid gap-10 py-16 md:grid-cols-[1.5fr_0.9fr] md:py-24">
          <div className="fade-section">
            <p className="mb-5 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-accentSoft">
              Electronics & Communication Engineering
            </p>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">
              {portfolio.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-accentSoft md:text-xl">
              {portfolio.title}
            </p>
            <p className="mt-6 max-w-2xl text-base text-slate-300 md:text-lg">
              {portfolio.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-[#091926] transition hover:brightness-110">
                View My Projects <ArrowRight size={18} />
              </a>
              <a
                href={portfolio.resume}
                download="PRAGADA_V_S_N_L_P_KUMAR_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-accent/40 hover:bg-white/10"
              >
                <Download size={18} /> Download Resume
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-accent/40 hover:bg-white/10">
                <Mail size={18} /> Contact Me
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-accent/40 hover:text-white">
                <Github size={18} />
              </a>
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-accent/40 hover:text-white">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${portfolio.email}`} aria-label="Email" className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-accent/40 hover:text-white">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="fade-section flex items-center justify-center">
            <div className="glass-panel signal-line relative w-full max-w-md overflow-hidden rounded-3xl p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(141,211,255,0.18),_transparent_40%)]" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-accentSoft">Profile</span>
                  <span className="rounded-full border border-neon/40 bg-neon/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-neon">
                    Active
                  </span>
                </div>

                <div className="mb-6 overflow-hidden rounded-2xl border border-accent/40 bg-[#081827] shadow-glow">
                  <img
                    src={portfolio.image}
                    alt="PRAGADA V S N L P KUMAR portrait"
                    className="h-52 w-full scale-[1.08] object-cover bg-[#0a1724]"
                  />
                </div>

                <div className="space-y-3">
                  {profileSummary.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="rounded-xl border border-white/10 bg-[#0d1b2a] p-3">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-subtle">Focus</div>
                    <div className="mt-2 text-sm font-semibold text-white">VLSI</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#0d1b2a] p-3">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-subtle">AI</div>
                    <div className="mt-2 text-sm font-semibold text-white">ML</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell py-20">
          <div className="fade-section mb-8">
            <h2 className="section-heading">About Me</h2>
            <p className="max-w-3xl text-slate-300">
              I am an ECE student exploring the intersection of hardware and intelligence, with a strong interest in
              VLSI, digital electronics, embedded systems, and AI-driven engineering. My focus is on building practical
              systems that combine semiconductor design thinking with modern software, machine learning, and data-driven problem solving.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { label: 'ECE Student', value: 'Hardware + Software' },
              { label: 'VLSI Specialization', value: 'Digital Design' },
              { label: 'Technical Projects', value: 'Hands-on Builds' },
              { label: 'Programming Skills', value: 'Java / Python / JS' },
            ].map((stat) => (
              <div key={stat.label} className="glass-panel card-hover rounded-2xl p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-subtle">{stat.label}</div>
                <div className="mt-3 text-xl font-semibold text-white">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="glass-panel rounded-3xl p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Areas of Interest</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'VLSI Design',
                  'Digital Electronics',
                  'Verilog HDL',
                  'FPGA',
                  'Semiconductor Technology',
                  'Embedded Systems',
                  'Java',
                  'Python',
                  'Machine Learning',
                ].map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Engineering Mindset</h3>
              <p className="text-slate-300">
                I enjoy understanding digital systems from architecture to implementation, then validating ideas through
                coding, simulation, and real-world technical exploration. My work balances theoretical understanding with
                hands-on project development.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell py-20">
          <div className="fade-section mb-10">
            <h2 className="section-heading">Skills</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Object.entries(skillCategoryMeta).map(([key, meta]) => {
              const Icon = meta.icon;
              return (
                <div key={key} className="glass-panel card-hover rounded-3xl p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-xl border border-accent/30 bg-accent/10 p-2 text-accent">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{meta.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {portfolio.skills[key].map((skill) => (
                      <span key={skill} className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-2 text-sm text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="section-shell py-20">
          <div className="fade-section mb-10">
            <h2 className="section-heading">Projects</h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {portfolio.projects.map((project) => (
              <article key={project.title} className="glass-panel card-hover rounded-3xl p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-accentSoft">
                    Project
                  </span>
                </div>
                <p className="text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-accent/40">
                    <Github size={16} /> GitHub
                  </a>
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accentSoft transition hover:brightness-110">
                      <ExternalLink size={16} /> Demo
                    </a>
                  ) : (
                    <button type="button" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                      Details
                    </button>
                  )}
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-[#0a1624] p-4">
                  <div className="mb-2 text-xs uppercase tracking-[0.2em] text-subtle">Highlights</div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell py-20">
          <div className="fade-section mb-10">
            <h2 className="section-heading">Experience</h2>
          </div>
          <div className="glass-panel rounded-3xl p-6 md:p-8">
            <h3 className="mb-4 text-2xl font-semibold text-white">Academic & Technical Experience</h3>
            <div className="space-y-5 text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm uppercase tracking-[0.2em] text-subtle">Experience</div>
                <div className="mt-3 text-lg font-semibold text-white">Programming practice</div>
                <p className="mt-2">Hands-on coding work in Java, Python, and JavaScript with a focus on software development and problem solving.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm uppercase tracking-[0.2em] text-subtle">Experience</div>
                <div className="mt-3 text-lg font-semibold text-white">VLSI / Digital design practice</div>
                <p className="mt-2">Engagement with RTL concepts, digital logic, FPGA workflows, and design exploration in the semiconductor domain.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm uppercase tracking-[0.2em] text-subtle">Experience</div>
                <div className="mt-3 text-lg font-semibold text-white">Machine learning projects</div>
                <p className="mt-2">Practical model design and experimentation using Python, TensorFlow, Keras, and computer vision applications.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm uppercase tracking-[0.2em] text-subtle">Experience</div>
                <div className="mt-3 text-lg font-semibold text-white">Networking labs</div>
                <p className="mt-2">Work with Cisco Packet Tracer and foundational networking concepts such as VLANs, ACLs, routing, and IP addressing.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm uppercase tracking-[0.2em] text-subtle">Experience</div>
                <div className="mt-3 text-lg font-semibold text-white">Software development projects</div>
                <p className="mt-2">Building responsive, structured web interfaces and engineering-focused projects using modern frontend technologies.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section-shell py-20">
          <div className="fade-section mb-10">
            <h2 className="section-heading">Education</h2>
          </div>
          <div className="space-y-6">
            {portfolio.education.map((edu) => (
              <div key={edu.degree} className="glass-panel rounded-3xl p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3 text-accent">
                  <GraduationCap size={22} />
                  <span className="text-sm uppercase tracking-[0.2em]">Education</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
                <p className="mt-2 text-slate-300">
                  <span className="font-medium text-white">Specialization:</span> {edu.specialization}
                </p>
                <p className="mt-2 text-slate-300">
                  <span className="font-medium text-white">Institution:</span> {edu.institution}
                </p>
                <p className="mt-2 text-slate-300">
                  <span className="font-medium text-white">Duration:</span> {edu.period}
                </p>
                <p className="mt-4 text-slate-300">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="section-shell py-20">
          <div className="fade-section mb-10">
            <h2 className="section-heading">Certifications</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolio.certifications.map((cert, index) => (
              <div key={`${cert.name}-${cert.organization}-${index}`} className="glass-panel card-hover rounded-3xl p-6">
                <div className="mb-2 text-sm uppercase tracking-[0.2em] text-subtle">Credential</div>
                <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                <p className="mt-3 text-slate-300">{cert.organization}</p>
                <div className="mt-4 grid gap-2 text-sm text-slate-300">
                  <div><span className="font-medium text-white">Date:</span> {cert.date}</div>
                  <div><span className="font-medium text-white">Credential ID:</span> {cert.credentialId}</div>
                </div>
                <a href={cert.url} className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-accent/40">
                  View Credential <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="achievements" className="section-shell py-20">
          <div className="fade-section mb-10">
            <h2 className="section-heading">Achievements</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {portfolio.achievements.map((item, index) => (
              <div key={item} className="glass-panel card-hover rounded-2xl p-5">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                  0{index + 1}
                </div>
                <p className="text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell py-20">
          <div className="glass-panel rounded-3xl p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-accentSoft">GitHub</div>
                <h2 className="mt-2 text-3xl font-bold text-white">Explore My Code</h2>
              </div>
              <a href={portfolio.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/10">
                <Github size={18} /> GitHub Profile
              </a>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {[
                { name: 'VLSI Design Notes', description: 'RTL concepts, FSM logic, and digital design practice.', language: 'Verilog', stars: 0, forks: 0, updated: 'Updated recently' },
                { name: 'ML Projects', description: 'Machine learning experiments and model workflows.', language: 'Python', stars: 0, forks: 0, updated: 'Updated recently' },
                { name: 'Web Portfolio', description: 'Modern frontend portfolio and engineering showcases.', language: 'JavaScript', stars: 0, forks: 0, updated: 'Updated recently' },
              ].map((repo) => (
                <div key={repo.name} className="rounded-2xl border border-white/10 bg-[#0d1b2a] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
                    <Github size={16} className="text-slate-400" />
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{repo.description}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                    <span>{repo.language}</span>
                    <span>★ {repo.stars}</span>
                    <span>⎇ {repo.forks}</span>
                  </div>
                  <div className="mt-3 text-xs text-slate-400">{repo.updated}</div>
                  <a href={portfolio.github} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-accentSoft">
                    Open Repository <ExternalLink size={15} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-20">
          <div className="glass-panel rounded-3xl p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-accentSoft">LinkedIn</div>
                <h2 className="mt-2 text-2xl font-bold text-white">Let&apos;s Connect Professionally</h2>
              </div>
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#091926] transition hover:brightness-110">
                <Linkedin size={18} /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="section-shell py-20">
          <div className="fade-section mb-10">
            <h2 className="section-heading">Resume</h2>
          </div>
          <div className="glass-panel rounded-3xl p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-slate-300">A concise overview of my academic and technical profile, including VLSI, software, and ML-related work.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={portfolio.resume} download="PRAGADA_V_S_N_L_P_KUMAR_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-[#091926]">
                  <Download size={18} /> Download Resume
                </a>
                <a href={portfolio.resume} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white">
                  <ExternalLink size={18} /> View Resume
                </a>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-white/10 bg-[#0a1624] p-5 text-sm text-slate-300">
              Resume file is kept in the <span className="text-white">/resume</span> folder and can be replaced with an updated PDF whenever available.
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell py-20">
          <div className="fade-section mb-10">
            <h2 className="section-heading">Contact</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass-panel rounded-3xl p-6">
              <h3 className="text-2xl font-semibold text-white">Let&apos;s Build Something Meaningful</h3>
              <div className="mt-6 space-y-4 text-slate-300">
                <a href={`mailto:${portfolio.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-accent/40">
                  <Mail size={18} className="text-accent" />
                  <span>{portfolio.email}</span>
                </a>
                <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-accent/40">
                  <Linkedin size={18} className="text-accent" />
                  <span>LinkedIn Profile</span>
                </a>
                <a href={portfolio.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-accent/40">
                  <Github size={18} className="text-accent" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="glass-panel rounded-3xl p-6" noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm text-slate-300">
                  <span className="mb-2 block">Name</span>
                  <input name="name" type="text" className="w-full rounded-xl border border-white/10 bg-[#0b1724] px-4 py-3 text-white outline-none transition focus:border-accent/60" placeholder="Your name" />
                </label>
                <label className="block text-sm text-slate-300">
                  <span className="mb-2 block">Email</span>
                  <input name="email" type="email" className="w-full rounded-xl border border-white/10 bg-[#0b1724] px-4 py-3 text-white outline-none transition focus:border-accent/60" placeholder="you@example.com" />
                </label>
              </div>

              <label className="mt-5 block text-sm text-slate-300">
                <span className="mb-2 block">Subject</span>
                <input name="subject" type="text" className="w-full rounded-xl border border-white/10 bg-[#0b1724] px-4 py-3 text-white outline-none transition focus:border-accent/60" placeholder="Project discussion / internship / collaboration" />
              </label>

              <label className="mt-5 block text-sm text-slate-300">
                <span className="mb-2 block">Message</span>
                <textarea name="message" rows="5" className="w-full rounded-xl border border-white/10 bg-[#0b1724] px-4 py-3 text-white outline-none transition focus:border-accent/60" placeholder="Tell me about your opportunity or project." />
              </label>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-[#091926] transition hover:brightness-110">
                  Send Message <ArrowRight size={18} />
                </button>
                {showContactStatus && (
                  <span className="text-sm text-accentSoft">
                    Please fill in all fields with valid contact details.
                  </span>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#081522]">
        <div className="section-shell flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-semibold text-white">{portfolio.name}</div>
            <div className="mt-2 text-sm uppercase tracking-[0.2em] text-accentSoft">ECE | VLSI | Software | AI</div>
          </div>
          <div className="flex items-center gap-5">
            <a href={portfolio.github} target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-white">GitHub</a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-white">LinkedIn</a>
            <a href={`mailto:${portfolio.email}`} className="text-slate-300 transition hover:text-white">Email</a>
          </div>
        </div>
        <div className="section-shell pb-8 text-sm text-slate-400">
          &copy; August 19, 2026 PRAGADA V S N L P KUMAR. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
