import styles from '../styles/components/LevelupModal.module.css';

export function LevelUpModal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>2</header>

        <strong>Parabéns</strong>
        <p>você alcançou um novo level.</p>

        <button type="button">
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}