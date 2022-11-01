import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { getYear } from '../../../utils';
import Movie from './MovieCard.styled';
import ContextMenu from '../ContextMenu';
import img_error from '../../../assets/img_error.png';

type MovieProps = {
  movie: MovieItem;
  handleClick: (params: MovieItem) => void;
};

const MovieComponent = ({ movie, handleClick }: MovieProps) => {
  const { poster_path, title, tagline, release_date } = movie;
  const [itemHover, setItemHover] = useState(false);
  const [menuHover, setMenuHover] = useState(false);
  const [imgNotFound, setImgNotFound] = useState(false);

  return (
    <>
      <Movie.Card
        onMouseEnter={() => setItemHover(true)}
        onMouseLeave={() => setItemHover(false)}
        onError={() => setImgNotFound(true)}
      >
        <Movie.Poster
          alt={title}
          src={imgNotFound ? img_error : poster_path}
          onClick={() => handleClick(movie)}
        />
        <Movie.MenuIcon
          hover={itemHover}
          onMouseEnter={() => setMenuHover(true)}
          onMouseLeave={() => setMenuHover(false)}
        >
          {menuHover ? (
            <ContextMenu movie={movie}></ContextMenu>
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
    </>
  );
};

export default MovieComponent;
