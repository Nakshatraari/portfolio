import { useEffect, useRef } from "react";
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { portfolio } from "./data.js";

// Scroll to the start of the new page after navigation.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Show plain text links from the shared portfolio data.
function TextLinks({ links }) {
  return (
    <div className="text-links">
      {links.map((link) => (
        <a
          href={link.href}
          key={link.label}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function PageHeading({ children }) {
  return <h2 className="page-heading">{children}</h2>;
}

// Reveal content as it enters the viewport, without an animation library.
function Reveal({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    if (!("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("is-visible");
        observer.unobserve(element);
      }
    }, { threshold: 0.08 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div className={`reveal ${className}`} ref={ref}>{children}</div>;
}

function AboutPage() {
  const { about } = portfolio;

  return (
    <main className="page-content">
      <section className="about-hero" aria-label="Introduction">
        <div className="hero-shape hero-shape-one" aria-hidden="true" />
        <div className="hero-shape hero-shape-two" aria-hidden="true" />
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-dots" aria-hidden="true" />
        <div className="about-hero-content">
          <p className="hero-subtitle">Computer Science Student at UT Dallas</p>
          <p className="hero-location"><span aria-hidden="true" />{about.location}</p>
          <TextLinks links={about.links} />
        </div>
      </section>
      <div className="about-layout">
        <Reveal className="notebook-card">
          <span className="notebook-tab">About me</span>
          <p>{about.paragraph}</p>
        </Reveal>
        <div className="highlight-grid">
          {about.highlights.map((item, index) => (
            <Reveal className="highlight-card" key={item.label}>
              <span className={`highlight-mark mark-${index + 1}`} aria-hidden="true" />
              <p>{item.label}</p>
              <span>{item.value}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}

function ProjectsPage() {
  const { projects } = portfolio;

  return (
    <main className="page-content">
      <PageHeading>{projects.title}</PageHeading>
      <div className="project-grid">
        {projects.items.map((project) => (
          <Reveal className="project-reveal" key={project.name}>
            <article className="project-card">
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <h3>{project.name}</h3>
              </div>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => <span className="project-tag" key={tag}>{tag}</span>)}
              </div>
              {project.github && (
                <a className="project-github" href={project.github} target="_blank" rel="noopener noreferrer">
                  View on GitHub <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </main>
  );
}

function ExperienceEntry({ entry }) {
  return (
    <article className="timeline-entry">
      <p className="timeline-dates">{entry.dates}</p>
      <h3>{entry.role}</h3>
      <p className="timeline-organization">{entry.organization}</p>
      <p className={`timeline-category category-${entry.category.toLowerCase()}`}>{entry.category}</p>
      {entry.paragraphs.map((paragraph) => <p className="timeline-description" key={paragraph}>{paragraph}</p>)}
    </article>
  );
}

function ExperiencePage() {
  const { experience, leadership } = portfolio;
  // Merge both role groups and order entries by the dates supplied in the data.
  const timeline = [
    ...experience.technical.map((entry) => ({ ...entry, category: "Technical" })),
    ...leadership.map((entry) => ({ ...entry, category: "Leadership" })),
  ].sort((a, b) => {
    const months = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
    const dateRank = (dates) => {
      const match = dates.match(/([A-Za-z]{3}) (\d{4})/);
      // Keep an entry without a supplied start date first rather than guessing it.
      if (!match) return Number.POSITIVE_INFINITY;
      return Number(match[2]) * 12 + months[match[1]];
    };

    return dateRank(b.dates) - dateRank(a.dates);
  });

  return (
    <main className="page-content">
      <PageHeading>Experience</PageHeading>
      <div className="experience-timeline">
        {timeline.map((entry) => (
          <Reveal className="timeline-reveal" key={`${entry.role}-${entry.organization}`}>
            <ExperienceEntry entry={entry} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}

function AwardsPage() {
  const { awards } = portfolio;

  return (
    <main className="page-content">
      <PageHeading>{awards.title}</PageHeading>
      <div className="award-list">
        {awards.items.map((item) => (
          <Reveal className="award-reveal" key={item.project}>
            <article className="award-card">
              <span className="award-index" aria-hidden="true">{String(awards.items.indexOf(item) + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.award}</h3>
                <p>{item.event} · {item.project}</p>
                <p className="award-date">{item.date}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </main>
  );
}

function ContactPage() {
  const { contact } = portfolio;

  return (
    <main className="page-content">
      <PageHeading>{contact.title}</PageHeading>
      <div className="contact-grid">
        {contact.links.map((link) => (
          <a
            className="contact-card"
            href={link.href}
            key={link.label}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          >
            <span>{link.label}</span>
            <span className="contact-card-arrow" aria-hidden="true">↗</span>
            <small>{link.text}</small>
          </a>
        ))}
      </div>
      <p className="contact-location">{contact.location}</p>
    </main>
  );
}

function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      <header className="site-header">
        <h1 className="site-name">
          <Link to="/">{portfolio.name}</Link>
        </h1>
      </header>
      <nav className="main-nav" aria-label="Main navigation">
        {portfolio.navigation.map((item) => (
          item.external ? (
            <a href={item.href} target="_blank" rel="noopener noreferrer" key={item.label}>{item.label}</a>
          ) : (
            <NavLink to={item.path} end={item.path === "/"} key={item.path}>{item.label}</NavLink>
          )
        ))}
      </nav>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer className="site-footer">
        <span>{portfolio.name}</span>
        <span>2026</span>
      </footer>
    </>
  );
}

// BrowserRouter maps each tab to a separate address.
function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  );
}

export default App;
