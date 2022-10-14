import React from "react";
import { Detail } from "./Detail.styled";
import Logo from "../../../shared/Logo";
import Button from "../../../shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type detailProps = {
  movie: MovieItem;
  handleClick?: () => void;
};

const DetailComponent = ({ movie, handleClick }: detailProps) => {
  const {
    poster_path,
    title,
    vote_average,
    genres,
    release_date,
    runtime,
    overview,
  } = movie;

  return (
    <>
      <Detail.Container>
        <Detail.Top>
          <Logo />
          <Button.Icon onClick={handleClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass} rotation={90} />
          </Button.Icon>
        </Detail.Top>
        <Detail.Content>
          <Detail.Poster src={poster_path} />
          <Detail.Description>
            <Detail.Group>
              <Detail.Title>{title}</Detail.Title>
              <Detail.Rating>{vote_average}</Detail.Rating>
            </Detail.Group>
            <Detail.SubTilte>
              {genres.toString().replace(",", " & ")}
            </Detail.SubTilte>
            <Detail.Group>
              <Detail.DateAndTime>{release_date}</Detail.DateAndTime>
              <Detail.DateAndTime>{runtime}</Detail.DateAndTime>
            </Detail.Group>
            <Detail.Overview>{overview}</Detail.Overview>
          </Detail.Description>
        </Detail.Content>
      </Detail.Container>
    </>
  );
};

export default DetailComponent;
