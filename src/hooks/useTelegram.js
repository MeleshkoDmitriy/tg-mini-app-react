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
  const userId = tg.initDataUnsafe?.user?.id;
  const firstName = tg.initDataUnsafe?.user?.first_name;
  const sendData = tg.sendData

  return {
    tg,
    onClose,
    onToggle,
    user,
    username,
    userId,
    firstName,
    sendData,
    query_id
  };
};
