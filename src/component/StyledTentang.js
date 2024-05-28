import styled from 'styled-components';

export const Main = styled.main`
  /* CSS untuk Main */
`;

export const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  padding: 30px;
`;

export const Container = styled.div`
  /* CSS untuk Container */
  display: flex;
  align-items: space-between;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Column = styled.div`
  /* CSS untuk Column */
  flex: 1;
  margin-right: 20px;
`;

export const Image = styled.img`
  /* CSS untuk Image */
  max-width: 100%;
  height: auto;
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
