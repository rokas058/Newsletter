import { PageLayout } from '@app/components/page-layout/page-layout.tsx';
import { HrForm } from '@app/page/hr/form/HrForm.tsx';

export const TravelPage = () => (
  <PageLayout childrenForm={<HrForm topicTitle="Travel" />} />
);
