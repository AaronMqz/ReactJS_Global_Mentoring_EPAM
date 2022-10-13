/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Movie from './MovieList.styled';
import ContextMenu from './ContextMenu';
import Filter from './Filter';
import Modal, { useModal } from '../../shared/Modal';
import Form from '../../shared/Form';

type MovieProps = {
  movie: MovieItem;
};

type MovieListProps = {
  movies: Array<MovieItem>;
};

const formTitles = {
  edit: 'EDIT MOVIE',
  delete: 'DELETE MOVIE',
};

const MovieListComponent = ({ movies }: MovieListProps) => {
  return (
    <>
      <Filter items={movies} />
      <Movie.Container>
        {movies.map((movie: MovieItem) => {
          return <MovieComponent key={movie.id} movie={movie} />;
        })}
      </Movie.Container>
    </>
  );
};

const MovieComponent = ({ movie }: MovieProps) => {
  const { poster_path, title, tagline, release_date } = movie;
  const [itemHover, setItemHover] = useState(false);
  const [menuHover, setMenuHover] = useState(false);
  const [modalType, seetModalType] = useState('');
  const { showModal, toogleModal } = useModal();

  const getYear = (release_date: string) => {
    try {
      return new Date(release_date).getFullYear();
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      console.log(message);
    }
  };

  const handleModal = (formType: string) => {
    toogleModal();
    seetModalType(formType);
  };

  const handleEditClick = (movie: MovieItem) => {
    console.log('moview updated: ', movie);
    toogleModal();
  };

  const handleDeleteClick = (movie: MovieItem) => {
    console.log('moview deleted: ', movie.title);
    toogleModal();
  };

  const handleFormType = () => {
    const title = formTitles[modalType as keyof typeof formTitles];
    if (modalType === 'delete') {
      return (
        <Form
          titleForm={title}
          onClick={handleDeleteClick}
          moviewIdToDelete={movie.id}
          movie={movie}
        />
      );
    } else {
      return <Form titleForm={title} movie={movie} onClick={handleEditClick} />;
    }
  };

  return (
    <>
      <Movie.Card
        onMouseEnter={() => setItemHover(true)}
        onMouseLeave={() => setItemHover(false)}
      >
        <Movie.Poster alt={title} src={poster_path} />
        <Movie.MenuIcon
          hover={itemHover}
          onMouseEnter={() => setMenuHover(true)}
          onMouseLeave={() => setMenuHover(false)}
        >
          {menuHover ? (
            <ContextMenu handleClick={handleModal}></ContextMenu>
          ) : (
            <FontAwesomeIcon icon={faEllipsisV} />
          )}
        </Movie.MenuIcon>
        <Movie.Content>
          <Movie.TitleContent>
            <Movie.Title>{title}</Movie.Title>
            <Movie.Year>{getYear(release_date)}</Movie.Year>
          </Movie.TitleContent>
          <Movie.Tagline>{tagline}</Movie.Tagline>
        </Movie.Content>
      </Movie.Card>
      {showModal && <Modal toogle={toogleModal}>{handleFormType()}</Modal>}
    </>
  );
};

export default MovieListComponent;
