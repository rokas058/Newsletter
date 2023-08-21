import { useEffect, useState } from 'react';
import { Form, Modal } from 'antd';

import { HrForm } from '@app/page/hr/form/HrForm.tsx';
import { StyledHrContainer } from '@app/page/hr/hr.styled.ts';
import { useGetPage } from '@app/page/hr/hooks/use-get-page.ts';
import { HrCard } from '@app/page/hr/hrCard/hr-card.tsx';
import { useDeleteSection } from '@app/page/hr/hooks/use-delete-section.ts';
import { useAddSection } from '@app/page/hr/hooks/use-add-section.ts';
import { PageLayout } from '@app/components/page-layout/page-layout.tsx';

export const HrPage = () => {
  const { requestState: getPageRequestState, page, getPage } = useGetPage();
  const { addSection } = useAddSection();
  const { loading, deleteSection } = useDeleteSection();
  const pages = JSON.parse(sessionStorage.getItem('pages') || '[]');
  const pageId = pages[0].id;
  const [uploadedImage, setUploadedImage] = useState([]);
  const [form] = Form.useForm();

  const handleOnDelete = async (sectionId: number | undefined) => {
    Modal.confirm({
      content: 'Are you sure you want to delete this section?',
      okText: 'Yes',
      cancelText: 'No',
      okButtonProps: {
        danger: true,
      },
      onOk: async () => {
        if (!loading) {
          await deleteSection(sectionId);
          await getPage(pageId);
        }
      },
    });
  };

  const handleOnFinish = async (values: any) => {
    await addSection(values);
    form.resetFields();
    setUploadedImage([]);
    await getPage(pageId);
  };

  useEffect(() => {
    if (!getPageRequestState && !page) {
      getPage(pageId);
    }
  }, [getPage, pageId, getPageRequestState, page]);

  return (
    <>
      <PageLayout
        childrenForm={
          <HrForm
            topicTitle="HR"
            form={form}
            onFinish={(values: any) => {
              handleOnFinish({ ...values, pageId, image: uploadedImage });
            }}
            setImageState={setUploadedImage}
          />
        }
        childrenCard={
          <StyledHrContainer>
            {page?.sections?.map((section) => (
              <HrCard
                key={section.id}
                title={section.title}
                text={section.text}
                image={
                  section.images?.length === 0
                    ? ''
                    : 'data:image/png;base64,' + section.images?.[0]?.image
                }
                onDelete={() => {
                  handleOnDelete(section.id);
                }}
              />
            ))}
          </StyledHrContainer>
        }
      />
    </>
  );
};
