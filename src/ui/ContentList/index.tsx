import React, { useState } from "react";
import PropTypes from "prop-types";
import ContentList from "./ContentList.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";

type MovieItem = {
  id: number;
  poster_path: string;
  title: string;
  tagline: string;
  release_date: string;
  vote_count: number;
  vote_average: number;
  overview: string;
  budget: number;
  revenue: number;
  genres: Array<string>;
  runtime: number;
};

type MovieProps = {
  item: MovieItem;
};

type MovieListProps = {
  items: Array<MovieItem>;
};

const ContentListComponent = ({ items }: MovieListProps) => {
  return (
    <>
      <Filter items={items} />
      <ContentList.ListContainer>
        {items.map((item: MovieItem) => {
          return <MovieItem key={item.id} item={item} />;
        })}
      </ContentList.ListContainer>
    </>
  );
};

const MovieItem = ({ item }: MovieProps) => {
  const { poster_path, title, tagline, release_date } = item;
  const [itemHover, setItemHover] = useState(false);

  const getYear = (release_date: string) => {
    try {
      return new Date(release_date).getFullYear();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <ContentList.Container
      onMouseEnter={() => setItemHover(true)}
      onMouseLeave={() => setItemHover(false)}
    >
      <ContentList.Poster alt={title} src={poster_path} />
      {itemHover && (
        <ContentList.Menu>
          <FontAwesomeIcon icon={faEllipsisV} />
        </ContentList.Menu>
      )}
      <ContentList.Content>
        <ContentList.TitleContent>
          <ContentList.Title>{title}</ContentList.Title>
          <ContentList.Year>{getYear(release_date)}</ContentList.Year>
        </ContentList.TitleContent>
        <ContentList.Tagline>{tagline}</ContentList.Tagline>
      </ContentList.Content>
    </ContentList.Container>
  );
};

ContentListComponent.prototype = {
  items: PropTypes.arrayOf(PropTypes.object),
};

MovieItem.prototype = {
  item: PropTypes.object,
};

export default ContentListComponent;
