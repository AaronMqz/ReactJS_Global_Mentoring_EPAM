import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MovieList from './MovieList';
import { mockData } from '../service/mockData';

export const HomePage = () => {
  return (
    <>
      <Header />
      <MovieList movies={mockData.data} />
      <Footer />
    </>
  );
};
