import { Button, Input, Space, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';

import {
  HrFormStyled,
  StyledButtonContainer,
  StyledFormItem,
} from '@app/page/hr/form/HrForm.styled.ts';

export const HrForm = () => {
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <HrFormStyled
      name="validate_other"
      onFinish={onFinish}
      layout="vertical"
      size="middle"
    >
      <StyledFormItem name="title">
        <Input placeholder="Title" />
      </StyledFormItem>
      <StyledFormItem name="text">
        <TextArea placeholder="Your text" />
      </StyledFormItem>
      <StyledFormItem>
        <StyledFormItem
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload.Dragger beforeUpload={() => false} name="files" action="">
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
            Submit
          </Button>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </StyledButtonContainer>
    </HrFormStyled>
  );
};
