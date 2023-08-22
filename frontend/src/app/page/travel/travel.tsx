import { PageLayout } from '@app/components/page-layout/page-layout.tsx';
import { HrForm } from '@app/page/hr/form/HrForm.tsx';
import { TravelCard } from '@app/page/news/travel-card/travel-card.tsx';

export const TravelPage = () => (
  <PageLayout
    childrenForm={<HrForm topicTitle="Travel" />}
    childrenCard={
      <>
        <TravelCard />
        <TravelCard />
      </>
    }
  />
);
