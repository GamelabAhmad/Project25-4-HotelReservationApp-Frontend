import styled from 'styled-components';

export const Main = styled.main`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const AboutSection = styled.section`
  margin-bottom: 40px;
`;

export const Container = styled.div`
  /* CSS untuk Container */
  display: flex;
  flex-direction: row; /* Mengatur agar elemen dalam container diatur secara horizontal */
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Column = styled.div`
  flex: 1;
  margin: 40px 60px 0 20px; /* Add margin to top and both sides for better spacing */
  text-align: justify; /* Justify the text in the column */
  width: 50%; /* Memberikan lebar agar kedua kolom tidak bertumpuk */
  font-size: 1.5rem;
`;

export const Image = styled.img`
  width: 100%; /* Lebar gambar 100% dari elemen pembungkus */
  max-width: 800px; /* Lebar maksimum gambar */
  height: 300px; /* Tinggi gambar */
  object-fit: contain; /* Menjaga proporsi gambar */
  margin-left: 20px; /* Posisikan gambar lebih ke kanan dengan margin kiri */
`;

export const TeamSection = styled.section`
  /* CSS untuk TeamSection */
  margin-top: 50px;
`;

export const TeamTitle = styled.h2`
  /* CSS untuk TeamTitle */
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const PhotosContainer = styled.div`
  /* CSS untuk PhotosContainer */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Photo = styled.div`
  /* CSS untuk Photo */
  margin: 10px;
  text-align: center;
`;

export const PhotoImage = styled.img`
  /* CSS untuk PhotoImage */
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
