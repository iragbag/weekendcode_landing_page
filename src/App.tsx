import { useEffect, useState } from "react";
import { repos } from "./repos";
import { RepoCard } from "./RepoCard";
import styles from "./App.module.css";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <button
          className={styles.toggleBtn}
          onClick={toggle}
          aria-label="Toggle light/dark mode"
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="2"  x2="12" y2="4"  />
              <line x1="12" y1="20" x2="12" y2="22" />
              <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"  />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="2"  y1="12" x2="4"  y2="12" />
              <line x1="20" y1="12" x2="22" y2="12" />
              <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
              <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
        <h1 className={styles.heading}>Weekend Projects</h1>
        <p className={styles.subheading}>
          A collection of tools and experiments built over weekends.
        </p>
      </header>
      <main className={styles.grid}>
        {repos.map((repo) => (
          <RepoCard key={repo.name} repo={repo} />
        ))}
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Curious what I get up to when the alarm actually goes off?{" "}
          <a
            href="https://www.raghavsharma.ca"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            The weekday version lives here.
          </a>
        </p>
      </footer>
    </div>
  );
}
