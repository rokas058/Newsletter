import { PageLayout } from '@app/components/page-layout/page-layout.tsx';
import { HrForm } from '@app/page/hr/form/HrForm.tsx';
import { HrNewsCard } from '@app/components/hr-news-card/hr-news-card.tsx';
import headDepartmentImage1 from '@app/assets/page-images/vadovai-1.png';
import headDepartmentImage2 from '@app/assets/page-images/vadovai-2.png';
import { StyledCardsContainer } from '@app/page/news/news.styled.ts';

export const NewsPage = () => (
  <PageLayout
    childrenForm={<HrForm />}
    childrenCard={
      <StyledCardsContainer>
        <HrNewsCard
          title="Vadovų naujienos"
          text="Veiksmingas skaitmeninis sprendimas yra maksimaliai paprastas, patogus bei suprantamas - orientuotas į tai, ko pirmiausia reikia. Visada pradėkite nuo pagrindų, palaipsniui tobulindami sprendimą ir praktiškai įsitikinkite, kad tai teisinga kryptis. Paprastumas ir laipsniškumas kuriant sprendimą padeda sudėtingus procesus padaryti daug prieinamesnius - efektyvesnius!
      , - sako Inga Ieraga, 'Tietoevry Create International Baltic Market Ruby on Rails' plėtros skyriaus vadovė."
          image={headDepartmentImage1}
          categoryName="Head Department News"
        />

        <HrNewsCard
          title="Vadovų naujienos"
          text="Kelias nuo idėjos iki kasdieninių sprendimų apima ne tik IT profesionalus, bet ir drąsius klientus, kurie siekia greitesnio ir saugesnio veikimo.
Skirtingų verslo sistemų ir interneto paslaugų sujungimui labai svarbios integracijos platformos, kurios supaprastina procesus ir organizacijoms suteikia realiuoju laiku gautus duomenis. Gerinant duomenų tikslumą ir analizę, pagerėja sprendimų priėmimas ir verslo valdymas.
Susipažink su Tietoevry Create International Baltic Market Java kompetencijų grupės vadybininku Igors Vasiljevs ir Tietoevry Senior Lead Integration Architektu Fredrik Tillström požiūriu!"
          image={headDepartmentImage2}
          categoryName="Head Department News"
        />
      </StyledCardsContainer>
    }
  />
);
