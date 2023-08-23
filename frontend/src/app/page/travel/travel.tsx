import { PageLayout } from '@app/components/page-layout/page-layout.tsx';
import { HrForm } from '@app/page/hr/form/HrForm.tsx';
import { TravelCard } from '@app/page/news/travel-card/travel-card.tsx';
import travelImage from '@app/assets/page-images/travel-image.jpg';
import travelImage1 from '@app/assets/page-images/travel.jpeg';
import { StyledCardsContainer } from '@app/page/travel/travel.styled.ts';

export const TravelPage = () => (
  <PageLayout
    childrenForm={<HrForm topicTitle="Travel" />}
    childrenCard={
      <StyledCardsContainer>
        <TravelCard
          categoryName="Travel"
          title="Beautiful Morning in the Desert!"
          text="The Sahara will surprise you. For one thing, it’s probably bigger than
          you think. The largest hot desert in the world, the Sahara occupies
          roughly 10 African countries, and is roughly the size of the States.
          Another thing – the Sahara isn’t always hot. Algeria’s dunes sometimes
          get dusted with snow. And it’s barely sandy: in fact, the Sahara is
          mostly stony plateau. Get to know this misunderstood monster with our
          Sahara travel guide."
          image={travelImage}
        />

        <TravelCard
          categoryName="Travel"
          title="Beautiful Morning in the Desert!"
          text="The Sahara will surprise you. For one thing, it’s probably bigger than
          you think. The largest hot desert in the world, the Sahara occupies
          roughly 10 African countries, and is roughly the size of the States.
          Another thing – the Sahara isn’t always hot. Algeria’s dunes sometimes
          get dusted with snow. And it’s barely sandy: in fact, the Sahara is
          mostly stony plateau. Get to know this misunderstood monster with our
          Sahara travel guide."
          image={travelImage1}
        />
      </StyledCardsContainer>
    }
  />
);
