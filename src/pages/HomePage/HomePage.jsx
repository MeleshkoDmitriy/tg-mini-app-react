import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

export const HomePage = () => {


  return (
    <section>
      <h1>HomePage</h1>
      <Link to={`/form`}><button>Show form page</button></Link>
    </section>
  );
};
