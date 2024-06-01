import React from 'react';
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
            <Image src="/images/img.jpg" alt="Image" /> {/* Path relatif ke public */}
          </Column>
        </Container>
      </AboutSection>
      <TeamSection>
        <TeamTitle>Tim Kami</TeamTitle>
        <PhotosContainer>
          <Photo>
            <PhotoImage src="/images/temm.jpg" alt="Team Member 1" />
            <p>asep</p>
          </Photo>
          <Photo>
            <PhotoImage src="/images/munyuk.jpg" alt="Team Member 2" />
            <p>orang tua</p>
          </Photo>
          <Photo>
            <PhotoImage src="/images/sponge.jpg" alt="Team Member 3" />
            <p>pak tua</p>
          </Photo>
          <Photo>
            <PhotoImage src="/images/inces.jpg" alt="Team Member 4" />
            <p>Cucu dakjal</p>
          </Photo>
          <Photo>
            <PhotoImage src="/images/jeus.jpg" alt="Team Member 5" />
            <p>Moch Rizal herdiansyah</p>
          </Photo>
        </PhotosContainer>
      </TeamSection>
    </Main>
  );
}

export default Tentang;
