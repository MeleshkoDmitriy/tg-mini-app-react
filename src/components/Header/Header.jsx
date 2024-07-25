import { useTelegram } from '../../hooks/useTelegram';
import { Button } from '../Button/Button';
import styles from './Header.module.css';

export const Header = () => {
  const {username, onClose} = useTelegram();

  return (
    <header className={styles.header}>
      <span>{username}</span>
      <Button onClick={onClose}>Закрыть</Button>
    </header>
  );
};
