import { StyledPageTitleContainer } from '@app/page/newbies/newbies.styled.ts';
import { NewbiesCard } from '@app/page/newbies/newbiesCard/newbies-card.tsx';
import ourPlane from '@app/assets/images/planeToUnemployement.png';
import './styles/moving-plane.css';
import { PageLayout } from '@app/components/page-layout/page-layout.tsx';
import { HrForm } from '@app/page/hr/form/HrForm.tsx';
import { useGetPage } from '@app/page/hr/hooks/use-get-page.ts';
import { useAddSection } from '@app/page/hr/hooks/use-add-section.ts';
import { useDeleteSection } from '@app/page/hr/hooks/use-delete-section.ts';

// eslint-disable-next-line import/order
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/order
import { Form, Modal } from 'antd';

export const NewbiesPage = () => {
  const { requestState: getPageRequestState, page, getPage } = useGetPage();
  const { addSection } = useAddSection();
  const { loading, deleteSection } = useDeleteSection();
  const pages = JSON.parse(sessionStorage.getItem('pages') || '[]');
  const pageId = pages[2].id;
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
            firstLabel="Full Name"
            secondLabel="Description"
            topicTitle="New Employee"
            form={form}
            onFinish={(values: any) => {
              handleOnFinish({ ...values, pageId, image: uploadedImage });
            }}
            setImageState={setUploadedImage}
          />
        }
        childrenCard={
          <>
            {/* SKRENDANTIS LEKTUVAS */}
            <div className="cloud cloud1">
              <img style={{ height: '350px' }} src={ourPlane} />
            </div>

            <StyledPageTitleContainer>
              {page?.sections?.map((section) => (
                <NewbiesCard
                  key={section.id}
                  // categoryName="Newbies"
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
            </StyledPageTitleContainer>
          </>
        }
      />
    </>
  );
};
