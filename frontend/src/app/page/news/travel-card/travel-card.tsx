import { DeleteOutlined, FormOutlined } from '@ant-design/icons';

import travelImage from '@app/assets/page-images/travel-image.jpg';
import { ButtonNew } from '@app/components/button-new/button-new.tsx';
import { colorBlack, colorYellow } from '@app/styles/colors.ts';

import {
  StyledActionIconsContainer,
  StyledContentContainer,
  StyledDescription,
  StyledHeading5,
  StyledImage,
  StyledImageContainer,
  StyledTravelCardContainer,
} from './travel-card.styled.ts';

export const TravelCard = () => (
  <StyledTravelCardContainer>
    <StyledImageContainer>
      <StyledImage src={travelImage} alt="travel-image" />
    </StyledImageContainer>
    <StyledContentContainer>
      <StyledActionIconsContainer>
        <ButtonNew $backgroundColor={colorYellow} $color={colorBlack}>
          <FormOutlined />
        </ButtonNew>
        <ButtonNew $backgroundColor={colorYellow} $color={colorBlack}>
          <DeleteOutlined />
        </ButtonNew>
      </StyledActionIconsContainer>
      <StyledHeading5>Travel</StyledHeading5>
      <h1>Beautiful Morning In The Desert!</h1>
      <StyledDescription>
        The Sahara will surprise you. For one thing, it’s probably bigger than
        you think. The largest hot desert in the world, the Sahara occupies
        roughly 10 African countries, and is roughly the size of the States.
        Another thing – the Sahara isn’t always hot. Algeria’s dunes sometimes
        get dusted with snow. And it’s barely sandy: in fact, the Sahara is
        mostly stony plateau. Get to know this misunderstood monster with our
        Sahara travel guide.
      </StyledDescription>
    </StyledContentContainer>
  </StyledTravelCardContainer>
);
