import React, { useState } from 'react';
import Header from './Header.styled';
import Logo from '../../shared/Logo';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import Modal, { useModal } from '../../shared/Modal';
import Form from '../../shared/Form';

const initialState = {
  id: 0,
  poster_path: '',
  title: '',
  tagline: '',
  release_date: '',
  vote_count: 0,
  vote_average: 0,
  overview: '',
  budget: 0,
  revenue: 0,
  genres: [],
  runtime: 0,
};

const HeaderComponent = () => {
  const { showModal, toogleModal } = useModal();
  const [newMovie, setNewMovie] = useState<MovieItem>(initialState);

  const handleNewMovie = (movie: MovieItem) => {
    setNewMovie(movie);
    toogleModal();
    console.log('new movie: ', movie);
  };

  return (
    <>
      <Header.Container>
        <Header.BackgroundImage />
        <Header.Top>
          <Logo />
          <Button.Add onClick={toogleModal}>{'+ ADD MOVIE'}</Button.Add>
        </Header.Top>
        <Header.Content>
          <Header.Title>FIND YOUR MOVIE</Header.Title>
          <Header.FormSearch>
            <Input.Text
              placeholder={'What do you want to watch?'}
              onChange={() =>
                console.log('pending development for future tasks')
              }
              name={'search'}
            />
            <Button.Primary
              onClick={() =>
                console.log('pending development for future tasks')
              }
            >
              {'SEARCH'}
            </Button.Primary>
          </Header.FormSearch>
        </Header.Content>
      </Header.Container>
      {showModal && (
        <Modal toogle={toogleModal}>
          <Form
            titleForm={'ADD MOVIEW'}
            movie={newMovie}
            onClick={handleNewMovie}
          />
        </Modal>
      )}
    </>
  );
};

export default HeaderComponent;
