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

  const username = tg.initDataUnsafe?.user?.username;

  return {
    tg,
    onClose,
    onToggle,
    username,
  };
};