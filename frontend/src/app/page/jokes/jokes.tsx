import {
  StyledCardsContainer,
  StyledJokesContainer,
  StyledMeme,
  StyledMemeContainer,
} from '@app/page/jokes/jokes-styled.ts';

import './styles/jokes-styles.css';
import { JokesCard } from '@app/page/jokes/jokes-card/jokes-card.tsx';
import memeOfTheMonth from '@app/assets/images/meme.png';
import { PageLayout } from '@app/components/page-layout/page-layout.tsx';
import { HrForm } from '@app/page/hr/form/HrForm.tsx';

export const JokesPage = () => (
  <>
    <PageLayout
      childrenForm={<HrForm topicTitle="Joke" />}
      childrenCard={
        <StyledCardsContainer>
          <StyledMemeContainer>
            <StyledMeme src={memeOfTheMonth} />
          </StyledMemeContainer>
          <StyledJokesContainer>
            <JokesCard
              text="Mielas Kalėdų Seneli, Šiemet dovanų norėčiau plonos figūros ir storos piniginės, tik nesupainiok kaip pernai"
              className="sketchy"
            />
            <JokesCard
              text={`Ateina Jėzus į barą.
      Barmenas klausia:
      - Kodėl durų neuždarei? Gal tvarte gimęs?`}
              className="sketchy"
            />
            <JokesCard
              text={`Žmona klausia:
      -Kodėl kai aš pradedu dainuoti, tu išeini į balkoną?
      Vyras:
      -Kad kaimynai nepagalvotų, kad smaugiu tave.`}
              className="sketchy"
            />
            <JokesCard
              text="Sunku būti dama po žirnių sriubos."
              className="sketchy"
            />
            <JokesCard
              text="Prisipirkau vyno: ispaniško, itališko, prancūziško - tegul bent kepenys pakeliauja."
              className="sketchy"
            />
            <JokesCard
              text={`Braškė sako:
      -Aš panaši į širdį.
      Graikinis riešutas sako:
      -Aš panašus į smegenis.
      Bananas sako:
      -Nežaisiu aš šito žaidimo...`}
              className="sketchy"
            />
          </StyledJokesContainer>
        </StyledCardsContainer>
      }
    />
  </>
);
