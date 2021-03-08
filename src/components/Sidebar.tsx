import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {
  return (
    <div className={styles.container}>
      <nav>
        <img src="/logo.svg" alt="Move.it"/>
        
        <ul>
          <li>
            <span className={styles.blueDetail}>.</span>
            <img src="/icons/home.svg" alt="home page" />
          </li>

          <li>
            <img src="/icons/medal.svg" alt="Leaderboard page" />
          </li>
        </ul>

      </nav>
    </div>
  );
}