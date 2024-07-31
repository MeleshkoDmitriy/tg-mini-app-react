import styles from './Button.module.css';

export const Button = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} type='button'>
      {children}
    </button>
  );
};
