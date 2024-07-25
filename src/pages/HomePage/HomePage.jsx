import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { useEffect } from 'react';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { useTelegram } from '../../hooks/useTelegram';


export const HomePage = () => {
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, [])

  return (
    <section>
      <Header />
      <h1>HomePage</h1>
      <Link to={`/form`}><Button>Show form page</Button></Link>
    </section>
  );
};
