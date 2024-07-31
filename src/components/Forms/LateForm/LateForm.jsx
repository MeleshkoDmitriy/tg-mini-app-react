import { useCallback, useEffect, useState } from 'react';
import styles from './LateForm.module.css';
import { useTelegram } from '../../../hooks/useTelegram';
import axios from 'axios';
import { BASE_URL } from '../../../api/api';

export const LateForm = () => {
  const type = 'late';
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const { tg, user } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      user,
      type,
      time,
      reason,
    };
  
    axios.post(BASE_URL, data)

    console.log(JSON.stringify(data));

    setTime('');
    setReason('');
  }, [time, reason]);
  

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    if (!time || !reason) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [time, reason, tg]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить',
    });
  }, []);

  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };

  const handleChangeReason = (event) => {
    setReason(event.target.value);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        onChange={handleChangeTime}
        type="text"
        placeholder="Через сколько ты будешь?"
        value={time}
      />
      <input
        className={styles.input}
        onChange={handleChangeReason}
        type="text"
        placeholder="Почему ты опаздываешь?"
        value={reason}
      />
    </form>
  );
};
