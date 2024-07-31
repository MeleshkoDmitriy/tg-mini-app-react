import { useCallback, useEffect, useState } from 'react';
import styles from './SickForm.module.css';
import { useTelegram } from '../../../hooks/useTelegram';
import axios from 'axios';
import { BASE_URL } from '../../../api/api';

export const SickForm = () => {
  const type = 'sick';
  const [official, setOfficial] = useState('');
  const [working, setWorking] = useState('');
  const [days, setDays] = useState('');
  const { tg, user } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      user,
      type,
      official,
      working,
      days,
    };

    axios.post(BASE_URL, data);

    console.log(JSON.stringify(data));

    setOfficial('');
    setWorking('');
    setDays('');
  }, [official, working, days]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    if (!official || !working || !days) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [official, working, days, tg]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить',
    });
  }, []);

  const handleChangeOfficial = (event) => {
    setOfficial(event.target.value);
  };

  const handleChangeWorking = (event) => {
    setWorking(event.target.value);
  };

  const handleChangeDays = (event) => {
    setDays(event.target.value);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        onChange={handleChangeOfficial}
        type="text"
        placeholder="Взял ли ты больничный?"
        value={official}
      />
      <input
        className={styles.input}
        onChange={handleChangeWorking}
        type="text"
        placeholder="Работаешь ли ты?"
        value={working}
      />
      <input
        className={styles.input}
        onChange={handleChangeDays}
        type="text"
        placeholder="Сколько дней планируешь болеть?"
        value={days}
      />
    </form>
  );
};
