import { Alert, Button, Space } from 'antd';

import {
  StyledAlertContainer,
  StyledDeletePopUpContainer,
} from '@app/components/delete-pop-up/delete-pop-up.styled.ts';

interface DeletePopUpProps {
  message: string;
  alertType: 'success' | 'info' | 'warning' | 'error' | undefined;
  onDelete?: () => void;
  onCancel?: () => void;
}

export const DeletePopUp = (props: DeletePopUpProps) => {
  const { message, alertType, onDelete, onCancel } = props;

  return (
    <StyledDeletePopUpContainer>
      <StyledAlertContainer>
        <Alert
          description={message}
          type={alertType}
          action={
            <Space direction="horizontal" size="middle">
              <Button size="middle" type="primary" onClick={onDelete}>
                Delete
              </Button>
              <Button
                size="middle"
                danger={true}
                ghost={true}
                onClick={onCancel}
              >
                Cancel
              </Button>
            </Space>
          }
          closable={true}
        />
      </StyledAlertContainer>
    </StyledDeletePopUpContainer>
  );
};
