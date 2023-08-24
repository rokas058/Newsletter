import { PageLayout } from '@app/components/page-layout/page-layout.tsx';
import { HrForm } from '@app/page/hr/form/HrForm.tsx';
import { TravelCard } from '@app/page/travel/travel-card/travel-card.tsx';
import travelImage1 from '@app/assets/page-images/travel.jpeg';
import desertImage1 from '@app/assets/page-images/travel-image.jpg';
import desertImage2 from '@app/assets/page-images/desert2.jpeg';
import desertImage3 from '@app/assets/page-images/desert3.jpeg';
import desertImage4 from '@app/assets/page-images/desert4.jpeg';
import yosemiteImage2 from '@app/assets/page-images/yosemite2.jpg';
import yosemiteImage3 from '@app/assets/page-images/yosemite3.jpg';
import yosemiteImage4 from '@app/assets/page-images/yosemite4.jpg';
import { StyledCardsContainer } from '@app/page/travel/travel.styled.ts';

export const TravelPage = () => (
  <PageLayout
    childrenForm={<HrForm topicTitle="Travel" />}
    childrenCard={
      <StyledCardsContainer>
        <TravelCard
          image1={desertImage1}
          image2={desertImage2}
          image3={desertImage3}
          image4={desertImage4}
          categoryName="Travel"
          title="Beautiful Morning in the Desert!"
          text="The Sahara will surprise you. For one thing, it’s probably bigger than
          you think. The largest hot desert in the world, the Sahara occupies
          roughly 10 African countries, and is roughly the size of the States.
          Another thing – the Sahara isn’t always hot. Algeria’s dunes sometimes
          get dusted with snow. And it’s barely sandy: in fact, the Sahara is
          mostly stony plateau. Get to know this misunderstood monster with our
          Sahara travel guide."
        />

        <TravelCard
          categoryName="Travel"
          title="Beautiful Morning in the Yosemite National Park!"
          text={`There is nothing quite as striking as viewing the valley for the first time while exiting the Wawona Tunnel, a view that stretches all the way to Half Dome and that impressed even the great Ansel Adams. For an even better view (and far fewer people to share it with), hike the 1.2­-mile trail to Inspiration Point from the tunnel’s upper parking lot.

          A circular one-way road system cruises past all of the valley’s major landmarks. The first of the many astonishing sights is the aptly named Bridalveil Fall, 620 feet of delicate white water tumbling down a granite face beneath Cathedral Rocks. Southside Drive soon runs along the Merced River, a slow-flowing scene for swimming, tubing, rafting, and fishing during the valley’s hot summer months. Cathedral Beach is a great place to get your feet wet or stare up at 3,593-foot El Capitan looming high above the valley. One of the holy grails of extreme adventure, the imposing cliff is on the bucket list of every serious rock climber. Bring binoculars to watch their slow but steady progression up El Cap.`}
          image1={travelImage1}
          image2={yosemiteImage2}
          image3={yosemiteImage3}
          image4={yosemiteImage4}
        />
      </StyledCardsContainer>
    }
  />
);
