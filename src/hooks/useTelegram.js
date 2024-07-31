const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => {
    tg.close();
  };

  const onToggle = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  const query_id = tg.initDataUnsafe?.query_id;
  const user = tg.initDataUnsafe?.user;
  const username = tg.initDataUnsafe?.user?.username;
  const sendData = tg.sendData

  return {
    tg,
    onClose,
    onToggle,
    user,
    username,
    sendData,
    query_id
  };
};
