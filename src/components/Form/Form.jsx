import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './Form.module.css';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Phone: ${phone}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        onChange={handleChangeName}
        type="text"
        placeholder="your name"
        value={name}
      />
      <input
        className={styles.input}
        onChange={handleChangePhone}
        type="text"
        placeholder="phone number"
        value={phone}
      />
      <Button type="submit">Отправить</Button>
    </form>
  );
};
