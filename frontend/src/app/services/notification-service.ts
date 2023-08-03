import { notification } from 'antd';

export class NotificationService {
  public static readonly error = (message: string) =>
    notification.error({ message, placement: 'bottomRight' });

  public static readonly success = (message: string) =>
    notification.success({ message, placement: 'bottomRight' });
}
