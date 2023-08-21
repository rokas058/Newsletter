import { PageLayout } from '@app/components/page-layout/page-layout.tsx';
import { HrForm } from '@app/page/hr/form/HrForm.tsx';

export const JokesPage = () => (
  <PageLayout childrenForm={<HrForm topicTitle="Wooden Jokes" />} />
);
