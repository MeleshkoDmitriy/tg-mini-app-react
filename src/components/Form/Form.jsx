import { Button } from '../Button/Button';
import styles from './Form.module.css';

export const Form = () => {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder='your name' />
      <input className={styles.input} type="text" placeholder='phone number' />
      <Button>Отправить</Button>
    </form>
  )
}
