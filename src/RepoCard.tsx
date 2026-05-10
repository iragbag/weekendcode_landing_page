import type { Repo } from "./repos";
import styles from "./RepoCard.module.css";

interface Props {
  repo: Repo;
}

const NOT_AVAILABLE_VALUES = new Set(["n/a", "na", "not available"]);

function isDemoAvailable(demoUrl: string | null): demoUrl is string {
  if (!demoUrl) return false;
  return !NOT_AVAILABLE_VALUES.has(demoUrl.trim().toLowerCase());
}

export function RepoCard({ repo }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <h2 className={styles.title}>{repo.name}</h2>
        <p className={styles.description}>{repo.description}</p>
      </div>
      <div className={styles.actions}>
        {isDemoAvailable(repo.demoUrl) ? (
          <a
            href={repo.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            View Demo →
          </a>
        ) : (
          <span className={`${styles.btn} ${styles.btnDisabled}`}>
            Not Available
          </span>
        )}
        <a
          href={repo.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.btn} ${styles.btnGhost}`}
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
