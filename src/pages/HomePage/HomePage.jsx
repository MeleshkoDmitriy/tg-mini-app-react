import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { useEffect } from 'react';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { useTelegram } from '../../hooks/useTelegram';
import { Form } from '../../components/Forms/Form/Form';

export const HomePage = () => {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  return (
    <section className={styles.container}>
      <Header />
      <h1 className={styles.title}>Выберите форму:</h1>
      <main className={styles.main}>
        <Link to={'/late'}>
          <Button>Опаздываю</Button>
        </Link>
        <Link to={'/sick'}>
          <Button>Заболел</Button>
        </Link>
      </main>
    </section>
  );
};
