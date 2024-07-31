import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { useEffect } from 'react';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { useTelegram } from '../../hooks/useTelegram';
import { Form } from '../../components/Form/Form';

export const HomePage = () => {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  return (
    <section >
      <Header />
      <h1>HomePage</h1>
      <main className={styles.main}>
        <Form />
      </main>
    </section>
  );
};
