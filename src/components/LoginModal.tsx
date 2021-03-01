import { useContext } from 'react';

import { GithubUserContext } from '../contexts/GithubUserContext';

import styles from '../styles/components/LoginModal.module.css';

export function LoginModal() {
  const { closeLoginModal, handleInputValue, inputUsernameValue } = useContext(GithubUserContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.imageBackground}>
          <img src="/icons/background.svg" />
        </div>

        <main>
          <img src="/logo-full.svg" alt="move.it" />
          
          <section>
            <h2>Bem-vindo</h2>

            <div className={styles.spanContainer}>
              <img 
                src="/icons/git.svg" 
                alt="git" 
              />
              <span>Faça login com seu Github para começar</span>
            </div>

            <div className={styles.inputUsername}>
              <input 
                type="text"
                placeholder="Digite seu username"
                onChange={event => handleInputValue(event.target.value)}
              />
              <button 
                type="button" 
                onClick={closeLoginModal}
                className={inputUsernameValue ? styles.confirmButton : undefined}
              >
                <img 
                  src="/icons/arrow-right.svg" 
                  alt="Arrow to right"
                />
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}