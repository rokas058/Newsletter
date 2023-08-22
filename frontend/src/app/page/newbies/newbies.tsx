import {
  StyledPageTitle,
  StyledPageTitleContainer,
} from '@app/page/newbies/newbies.styled.ts';
import './styles/moving-plane.css';

import ourPlane from '@app/assets/images/planeToUnemployement.png';

export const NewbiesPage = () => (
  <StyledPageTitleContainer>
    <StyledPageTitle>BEDARBIAI</StyledPageTitle>
    <div className="cloud cloud1">
      <img style={{ height: '350px' }} src={ourPlane} />
    </div>
  </StyledPageTitleContainer>
);
