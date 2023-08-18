import { Button, Input, Space, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';

import {
  HrFormStyled,
  StyledButtonContainer,
  StyledFormItem,
} from '@app/page/hr/form/HrForm.styled.ts';

interface HrFormInterface {
  onFinish?: any;
  setImageState: (uint8Array: any) => void;
  form: any;
}

export const HrForm = (props: HrFormInterface) => {
  const { setImageState, onFinish, form } = props;

  return (
    <HrFormStyled
      name="validate_other"
      onFinish={onFinish}
      layout="vertical"
      size="middle"
      form={form}
    >
      <StyledFormItem name="title">
        <Input placeholder="Title" />
      </StyledFormItem>
      <StyledFormItem name="text">
        <TextArea placeholder="Your text" />
      </StyledFormItem>
      <StyledFormItem>
        <StyledFormItem name="image">
          <Upload.Dragger
            beforeUpload={(file) => {
              const reader = new FileReader();

              reader.onload = (e) => {
                if (e.target?.result instanceof ArrayBuffer) {
                  const result = new Uint8Array(e.target.result);

                  setImageState(result);
                }
              };
              reader.readAsArrayBuffer(file);

              // Prevent upload
              return false;
            }}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </StyledFormItem>
      </StyledFormItem>
      <StyledButtonContainer>
        <Space>
          <Button type="primary" htmlType="submit">
            Create card
          </Button>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </StyledButtonContainer>
    </HrFormStyled>
  );
};
