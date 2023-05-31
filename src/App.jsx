import React from 'react';
import styled,{ ThemeProvider } from 'styled-components';

import { urls } from '../config/apiKey';
import theme from './styles/theme';
import { DataLoader } from './components/DataLoader/DataLoader';
import { MovieInfo } from './components/Card/Card';
import { Navbar } from './components/Navbar/Navbar';
import { ContainerTypes } from './styles/styles';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
 
`;

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Navbar />
        <DataLoader
        resourceName="movie"
        resourceUrl={urls.getPopularMovies}
        itemComponent={MovieInfo}
        containerStyle={ContainerTypes["flex"]}
        />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
