import { notification } from 'antd';

export class NotificationService {
  public static readonly error = (message: string) =>
    notification.error({ message, placement: 'bottomRight' });
}
