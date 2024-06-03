import React from 'react';
import { 
  Main, 
  AboutSection,
  Container,
  Column,
  Image,
  KontainerTim,
  GridAnggota,
  KartuAnggota,
  GambarAnggota,
  NamaAnggota
} from '../component/StyledTentang';

const anggotaTim = [
  { nama: 'Andhita Firmansyah Putra', img: '/images/firman.png' },
  { nama: 'Faza Yoga Ardana', img: '/images/faza-yoga.png' },
  { nama: 'Moch Rizal Hardiansyah', img: '/images/moch_zeus.png' },
  { nama: 'Muhammad Rinal', img: '/images/muhammad-rinal.png' },
  { nama: 'Septinna Choirunisa', img: '/images/septinna-choirunisa.png' },
];

const Tentang = () => {
  return (
    <Main>
      <AboutSection>
        <div style={{ textAlign: 'center', width: '100%' }}>
          <h1 style={{ marginTop: '20px', fontSize: '2.5rem', display: 'inline-block', borderBottom: '2px solid black'}}>Tentang</h1>
        </div>
        <Container>
          <Column>
            <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</p>
          </Column>
          <Column>
            <Image src="/images/img.jpg" alt="Image" /> {/* Path relatif ke public */}
          </Column>
        </Container>
      </AboutSection>
      <KontainerTim>
      <div style={{ textAlign: 'center', width: '100%' }}>
          <h1 style={{ marginTop: '20px', fontSize: '2.5rem', display: 'inline-block', borderBottom: '2px solid black'}}>Tim Kami</h1>
        </div>
        <GridAnggota>
          {anggotaTim.map((anggota, index) => (
            <KartuAnggota key={index}>
              <GambarAnggota src={anggota.img} alt={anggota.nama} />
              <NamaAnggota>{anggota.nama}</NamaAnggota>
            </KartuAnggota>
          ))}
        </GridAnggota>
      </KontainerTim>
    </Main>
  );
}

export default Tentang;
