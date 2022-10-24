import React, { useState, useEffect } from "react";
import Header from "./Header.styled";
import Search from "./Search";
import Detail from "./Detail";

type headerProps = {
  movie: MovieItem;
};

const HeaderComponent = ({ movie }: headerProps) => {
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    if (movie.id !== 0) {
      setShowDetail(true);
      window.scrollTo(0, 0); //Move screen to top
    }
  }, [movie]);

  return (
    <Header.Container>
      {showDetail ? (
        <Detail movie={movie} handleClick={() => setShowDetail(false)} />
      ) : (
        <Search />
      )}
    </Header.Container>
  );
};

export default React.memo(HeaderComponent);
