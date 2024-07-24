import { message } from 'antd';

const messageSuccess = (content: string, duration = 1) => {
  message.destroy();
  void message.success({
    content,
    duration,
  });
};

const messageError = (content: string, duration = 1) => {
  message.destroy();
  void message.error({
    content,
    duration,
  });
};

export { messageSuccess, messageError };
