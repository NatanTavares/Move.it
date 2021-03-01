import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { GithubUserContext } from '../contexts/GithubUserContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { user } = useContext(GithubUserContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/NatanTavares.png" alt="Natan Tavares"/>
      <div>
        <strong>{user}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}