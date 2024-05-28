import React from 'react';
import LogoImage from '../img/temm.jpg'; 
import LogoImage1 from '../img/munyuk.jpg'; 
import LogoImage2 from '../img/sponge.jpg'; 
import LogoImage3 from '../img/inces.jpg'; 
import LogoImage4 from '../img/jeus.jpg'; 
import LogoImage5 from '../img/img.jpg'; 
import { 
  Main, 
  AboutSection,
  Container,
  Column,
  Image,
  TeamSection,
  TeamTitle,
  PhotosContainer,
  Photo,
  PhotoImage,
 } from '../component/StyledTentang';

function Tentang() {
  return (
    <Main>
      <AboutSection>
        <Container>
          <Column>
            <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</p>
          </Column>
          <Column>
            <Image src={LogoImage5} alt="Image" />
          </Column>
        </Container>
      </AboutSection>
      <TeamSection>
        <TeamTitle>Tim Kami</TeamTitle>
        <PhotosContainer>
          <Photo>
            <PhotoImage src={LogoImage} alt="Team Member 1" />
            <p>asep</p>
          </Photo>
          <Photo>
            <PhotoImage src={LogoImage1} alt="Team Member 2" />
            <p>orang tua</p>
          </Photo>
          <Photo>
            <PhotoImage src={LogoImage2} alt="Team Member 3" />
            <p>pak tua</p>
          </Photo>
          <Photo>
            <PhotoImage src={LogoImage3} alt="Team Member 4" />
            <p>Cucu dakjal</p>
          </Photo>
          <Photo>
            <PhotoImage src={LogoImage4} alt="Team Member 5" />
            <p>Moch Rizal herdiansyah</p>
          </Photo>
        </PhotosContainer>
      </TeamSection>
    </Main>
  );
}

export default Tentang;
