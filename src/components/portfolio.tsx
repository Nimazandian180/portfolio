import Link from "next/link";
import { assetPath } from "@/lib/paths";
import { copy, projects, type Locale, type Project } from "@/lib/content";
import { Arrow, Download, Asterisk } from "./icons";
import { HeroArtwork, ProjectArtwork } from "./artwork";
const email = "nimazandian1380@gmail.com";
function ProjectStory({
  project,
  locale,
  featured = false,
}: {
  project: Project;
  locale: Locale;
  featured?: boolean;
}) {
  const t = copy[locale],
    story = project[locale];
  return (
    <article
      className={featured ? "featured-project" : "project-row"}
      id={`project-${project.id}`}
    >
      {featured && <ProjectArtwork kind={project.id} />}
      <div className="project-content">
        <div className="project-meta">
          <span className={`status status-${project.status}`}>
            <i />
            {t[project.status]}
          </span>
          {project.months && (
            <span>
              {new Intl.NumberFormat(locale).format(project.months)} {t.months}
            </span>
          )}
        </div>
        <h3>{story.name}</h3>
        <p className="project-description">{story.description}</p>
        <div className="tags" dir="ltr">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <details>
          <summary>
            {t.details}
            <span className="plus" aria-hidden="true" />
          </summary>
          <div className="project-detail">
            <p>{story.contribution}</p>
            {project.url && (
              <a
                className="text-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.visit}
                <Arrow diagonal />
              </a>
            )}
          </div>
        </details>
      </div>
    </article>
  );
}
export function Portfolio({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <header className="site-header wrap">
        <Link href={`/${locale}`} className="brand" aria-label={t.name}>
          <span className="monogram" dir="ltr">
            nz<span>.</span>
          </span>
          <span className="brand-name">{t.name}</span>
        </Link>
        <nav aria-label={locale === "en" ? "Main navigation" : "منوی اصلی"}>
          <a href="#work">{t.work}</a>
          <a href="#about">{t.about}</a>
          <a href="#contact">{t.contact}</a>
        </nav>
        <Link
          className="language"
          href={locale === "en" ? "/fa" : "/en"}
          hrefLang={locale === "en" ? "fa" : "en"}
          lang={locale === "en" ? "fa" : "en"}
        >
          {locale === "en" ? "فارسی" : "English"}
          <span aria-hidden="true">↗</span>
        </Link>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <h1 id="hero-heading">
              {t.headline[0]}
              <br />
              <span>{t.headline[1]}</span>
            </h1>
            <p>{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-ink" href="#work">
                {t.viewWork}
                <Arrow />
              </a>
              <a className="text-link" href={`mailto:${email}`}>
                {t.sayHello}
                <Arrow diagonal />
              </a>
            </div>
            <div className="hero-signoff">
              <span className="small-line" />
              <span dir="ltr">{t.based}</span>
            </div>
          </div>
          <div className="hero-visual">
            <HeroArtwork />
            <p className="art-caption">{t.illustration}</p>
          </div>
        </section>
        <section
          className="work wrap section"
          id="work"
          aria-labelledby="work-heading"
        >
          <div className="section-heading">
            <h2 id="work-heading">{t.selected}</h2>
            <p>{t.workIntro}</p>
          </div>
          <div className="featured-grid">
            {projects.slice(0, 2).map((p) => (
              <ProjectStory key={p.id} project={p} locale={locale} featured />
            ))}
          </div>
          <div className="project-list">
            {projects.slice(2).map((p) => (
              <ProjectStory key={p.id} project={p} locale={locale} />
            ))}
          </div>
          <p className="art-disclaimer">{t.artNote}</p>
        </section>
        <section
          className="about-section section"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="wrap about-grid">
            <div className="about-title">
              <Asterisk />
              <h2 id="about-heading">{t.aboutTitle}</h2>
            </div>
            <div className="about-copy">
              <p className="large-copy">{t.aboutBody}</p>
              <p>{t.aboutBody2}</p>
              <div className="experience">
                <h3>{t.experience}</h3>
                <div className="experience-row">
                  <div>
                    <strong>{t.job}</strong>
                    <span>{t.company}</span>
                  </div>
                  <span>{t.present}</span>
                </div>
                <div className="experience-row">
                  <div>
                    <strong>{t.internship}</strong>
                    <span>
                      {locale === "en"
                        ? "Software testing & quality assurance"
                        : "تست نرم‌افزار و تضمین کیفیت"}
                    </span>
                  </div>
                  <span>{t.internshipTime}</span>
                </div>
                <div className="education">
                  <strong>{t.education}</strong>
                  <span>{t.university}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="toolkit section wrap"
          aria-labelledby="toolkit-heading"
        >
          <h2 id="toolkit-heading">{t.toolkit}</h2>
          <div className="skills-grid">
            {[
              {
                name: t.core,
                skills: [
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "HTML & CSS",
                ],
              },
              {
                name: t.ui,
                skills: [
                  "Tailwind CSS",
                  "MUI",
                  "shadcn/ui",
                  "SCSS",
                  "React Hook Form",
                ],
              },
              {
                name: t.data,
                skills: ["React Query", "Zustand", "Redux", "REST APIs", "Zod"],
              },
              {
                name: t.quality,
                skills: [
                  "Cypress",
                  "Vitest",
                  "Git",
                  "GitHub / GitLab",
                  "AI-assisted development",
                ],
              },
            ].map((g) => (
              <div className="skill-group" key={g.name}>
                <h3>{g.name}</h3>
                <ul dir="ltr">
                  {g.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="resume-section wrap" id="resume">
          <div>
            <h2>{t.download}</h2>
            <p>{t.resumeNote}</p>
          </div>
          <div className="resume-links">
            <a href={assetPath("/resume/Nima_Zandian_Resume_EN.pdf")} download>
              <span>
                {t.enResume}
                <small>PDF · EN</small>
              </span>
              <Download />
            </a>
            <a href={assetPath("/resume/Nima_Zandian_Resume_FA.pdf")} download>
              <span>
                {t.faResume}
                <small>PDF · FA</small>
              </span>
              <Download />
            </a>
          </div>
        </section>
        <section
          className="contact-section section"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="wrap">
            <div className="contact-main">
              <h2 id="contact-heading">
                {t.contactTitle[0]}
                <br />
                <span>{t.contactTitle[1]}</span>
              </h2>
              <div className="contact-copy">
                <p>{t.contactBody}</p>
                <a href={`mailto:${email}`} className="button button-paper">
                  {t.email}
                  <Arrow diagonal />
                </a>
              </div>
            </div>
            <div className="contact-bottom">
              <a className="email-link" href={`mailto:${email}`} dir="ltr">
                {email}
              </a>
              <a
                className="text-link"
                href="https://linkedin.com/in/nima-zandian"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.linkedin}
                <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
        <span>
          © {new Date().getFullYear()} {t.name}
        </span>
        <span>{t.footer}</span>
        <a href="#">
          {t.top}
          <Arrow diagonal />
        </a>
      </footer>
    </>
  );
}
