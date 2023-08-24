import {
  StyledAnchorElement,
  StyledContentContainer,
  StyledHeader,
  StyledLinkDiv,
  StyledMainParagraph,
  StyledMiniDiv,
  StyledPageContainer,
  StyledParagraph,
  StyledSpan,
  StyledUkraineImage,
} from '@app/page/ukraina/ukraina.styled.ts';
import ukraineImage from '@app/assets/images/standWithUkraine.jpg';

export const UkrainaPage = () => (
  <StyledPageContainer>
    <StyledHeader>STAND WITH UKRAINE</StyledHeader>
    <StyledContentContainer>
      <StyledUkraineImage src={ukraineImage} />
      <StyledMainParagraph>
        Nors praėjo jau daug laiko, nepamirškime, kad Ukraina vis dar kovoja už
        mus visus, ir mes turime jiems padėti 💙
      </StyledMainParagraph>

      <StyledSpan style={{ fontSize: '30px' }}>Tietoevry naujienos:</StyledSpan>
      <StyledParagraph>
        Maždaug 90% mūsų Ukrainos komandos narių yra vietovėse, kuriose
        numatomas mažesnis rizikos lygis, tačiau turime dešimtis kolegų, kurie
        nuolat tarnauja ginkluotosiose pajėgose. Mes ir toliau kasdien stebime
        savo komandos narių saugumą.
      </StyledParagraph>
      <StyledParagraph>
        Jau daugiau, kaip metus Ukraina kovoja už savo ir visų laisvojo pasaulio
        žmonių laisvę. Vakarų pasaulis ir toliau laikosi vieningos pozicijos su
        Ukraina, įskaitant mus, esančius Tietoevryje. Vieną dieną ir tai baigsis
        - tikėkimės, kad ta diena ateis greitai. O mes ir toliau laikysimės
        kartu su Ukraina, kiek tik reikės.
      </StyledParagraph>
      <StyledParagraph>
        Tietoevry inicijuoja darbuotojų lėšų rinkimo kampaniją per Norvegijos
        lėšų rinkimo platformą "Spleis". Kampanijos metu renkami pinigai bus
        aukojami tiesiogiai mūsų kolegų, žuvusių ar sužeistų per karą, šeimoms.
      </StyledParagraph>
      <StyledLinkDiv>
        <StyledMiniDiv>
          <StyledSpan>Paaukok</StyledSpan>
          <StyledAnchorElement href="https://www.spleis.no/PROJECT/218485">
            Aukojimo nuoroda 💙
          </StyledAnchorElement>
          <StyledAnchorElement href="https://www.blue-yellow.lt/">
            BLUE-YELLOW 💛
          </StyledAnchorElement>
        </StyledMiniDiv>
        <StyledMiniDiv>
          <StyledSpan>Visa informacija atvykstantiems ukrainiečiams</StyledSpan>
          <StyledAnchorElement href="https://helpua.lt/">
            HelpUA 💙
          </StyledAnchorElement>
        </StyledMiniDiv>
        <StyledMiniDiv>
          <StyledSpan>LT847300010171415974</StyledSpan>
          <StyledSpan>VŠĮ VIENAS K PARAMOS FONDAS</StyledSpan>
          <StyledSpan>Įmonės kodas: 306036141</StyledSpan>
          <StyledSpan>Paskirtis: Parama</StyledSpan>
          <StyledSpan>Adresas: Vilnius, Peteliškių g. 9-10</StyledSpan>
          <StyledSpan>Direktorius: Oleg Šurajev</StyledSpan>
          <StyledAnchorElement href="https://suukraina.lt/pagalba-ukrainai/aukojimas/1k-paramos-fondas/">
            1K Paramos Fondas 💛
          </StyledAnchorElement>
        </StyledMiniDiv>
      </StyledLinkDiv>
      <StyledLinkDiv>
        <StyledMiniDiv>
          <StyledSpan>Savanoriauk</StyledSpan>
          <StyledAnchorElement href="https://www.redcross.lt/savanoriaukite">
            Raudonasis kryžius 💙
          </StyledAnchorElement>
          <StyledAnchorElement href="https://www.sauliusajunga.lt/">
            Šaulių sąjunga 💛
          </StyledAnchorElement>
          <StyledAnchorElement href="http://www.maistobankas.lt/reg">
            Maisto bankas 💙
          </StyledAnchorElement>
          <StyledAnchorElement href="https://forms.gle/EkAD8iSJt4aYYr3x8">
            Lietuvos Caritas 💛
          </StyledAnchorElement>
          <StyledAnchorElement href="https://forms.office.com/r/E3gGXPpkvB">
            Maltos ordino Pagalbos Tarnyba 💙
          </StyledAnchorElement>
        </StyledMiniDiv>
        <StyledMiniDiv>
          <StyledSpan>Apgyvendinimas ir pavežėjimas️</StyledSpan>
          <StyledAnchorElement href="https://stipruskartu.lt/">
            Maltos ordino Pagalbos Tarnyba 💛
          </StyledAnchorElement>
        </StyledMiniDiv>
        <StyledMiniDiv>
          <StyledSpan>Gyvūnų globa</StyledSpan>
          <StyledAnchorElement href="https://bit.ly/PrieglobstisGyvunams">
            GGI 💙
          </StyledAnchorElement>
        </StyledMiniDiv>
        <StyledMiniDiv>
          <StyledSpan>Sekite korporacijos naujienas</StyledSpan>
          <StyledAnchorElement href="https://tietoevry.sharepoint.com/sites/ourcompany/SitePages/Ukraine.aspx">
            Naujienos apie situaciją Ukrainoje 💛
          </StyledAnchorElement>
          <StyledAnchorElement href="https://tietoevry.workplace.com/groups/265896197727289s">
            Workplace Tietoevry news grupė 💙
          </StyledAnchorElement>
          <StyledAnchorElement href="https://tietoevry.sharepoint.com/sites/myemployment/SitePages/War-in-Ukraine-u.aspx">
            Tietoevry Lietuva Ukrainai skirtas puslapis 💙
          </StyledAnchorElement>
        </StyledMiniDiv>
      </StyledLinkDiv>
    </StyledContentContainer>
  </StyledPageContainer>
);
