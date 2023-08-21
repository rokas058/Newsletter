import {
  StyledPageTitle,
  StyledPageTitleContainer,
} from '@app/page/newbies/newbies.styled.ts';
import { NewbiesCard } from '@app/page/newbies/newbiesCard/newbies-card.tsx';
import profilePictureG from '@app/page/newbies/newbies-images/profile-picG.jpg';
import profilePictureJoana from '@app/page/newbies/newbies-images/profile-picJoana.jpg';
import profilePictureJulius from '@app/page/newbies/newbies-images/profile-picJulius.jpg';
import ourPlane from '@app/assets/images/planeToUnemployement.png';
import './styles/moving-plane.css';

export const NewbiesPage = () => (
  <StyledPageTitleContainer>
    <StyledPageTitle>BEDARBIAI</StyledPageTitle>
    <div className="cloud cloud1">
      <img style={{ height: '350px' }} src={ourPlane} />
    </div>
    <NewbiesCard
      title="Julius Kaulinis"
      description={`Front-End Developer

      Nekantrauju prisijungti prie komandos ir tapti jos dalimi!`}
      image={profilePictureJulius}
    />
    <NewbiesCard
      title="Joana Mastianica"
      description={`Front-End Developer

      Nekantrauju prisijungti prie komandos ir tapti jos dalimi!`}
      image={profilePictureJoana}
    />
    <NewbiesCard
      title="Gabrielė Šimbelytė"
      description={`Business Analyst

      Nekantrauju prisijungti prie komandos ir tapti jos dalimi!`}
      image={profilePictureG}
    />
  </StyledPageTitleContainer>
);
