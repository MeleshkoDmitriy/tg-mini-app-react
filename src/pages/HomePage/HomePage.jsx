import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { useEffect } from 'react';

const tg = window.Telegram.WebApp;

export const HomePage = () => {
  useEffect(() => {
    tg.ready();
    tg.expand();
  }, [])

  const onCloseClick = () => {
    tg.close();
  };

  return (
    <section>
      <h1>HomePage</h1>
      <Link to={`/form`}><button>Show form page</button></Link>
      <button onClick={onCloseClick}>Закрыть</button>
    </section>
  );
};
