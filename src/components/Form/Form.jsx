import { useCallback, useEffect, useState } from 'react';
import styles from './Form.module.css';
import { useTelegram } from '../../hooks/useTelegram';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { tg, sendData } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      name: name,
      phone: phone,
    };
    console.log(data)
    sendData(JSON.stringify(data));
    // setName('');
    // setPhone('');
  }, [name, phone, tg, sendData]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData, tg]);

  useEffect(() => {
    if (!name || !phone) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [name, phone, tg]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Send data',
    });
  }, []);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <form className={styles.form}>
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
      <button onClick={onSendData} type='button'>sendbutton</button>
    </form>
  );
};
