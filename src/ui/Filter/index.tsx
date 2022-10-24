import React from "react";
import PropTypes, { InferProps } from "prop-types";
import Filter from "./Filter.styled";
import SortBy from "./SortBy";
import { getMoviesGenres } from "../../utils";
import { SortByList } from "../../utils/constants";

const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      tagline: PropTypes.string,
      release_date: PropTypes.string,
      vote_count: PropTypes.number,
      vote_average: PropTypes.number,
      overview: PropTypes.string,
      budget: PropTypes.number,
      revenue: PropTypes.number,
      genres: PropTypes.arrayOf(PropTypes.string),
      runtime: PropTypes.number,
    })
  ),
};

type FilterProps = InferProps<typeof propTypes>;

const FilterComponent = ({ items }: FilterProps) => {
  return (
    <Filter.Container>
      <Filter.Section>
        <FilterByGenres items={items} />
        <FilterSortBy />
      </Filter.Section>
      <Filter.Count>
        <FilterCount items={items} />
      </Filter.Count>
    </Filter.Container>
  );
};

const FilterByGenres = ({ items }: FilterProps) => {
  return (
    <Filter.FilterContent>
      <Filter.LabelFilter active={true}>{"ALL"}</Filter.LabelFilter>
      {getMoviesGenres(items as Array<MovieItem>).map((item, index) => {
        return (
          <Filter.LabelFilter active={false} key={index} id={item}>
            {item.toUpperCase()}
          </Filter.LabelFilter>
        );
      })}
    </Filter.FilterContent>
  );
};

const FilterSortBy = () => {
  return (
    <Filter.SortConatiner>
      <Filter.LabelSort>SORT BY</Filter.LabelSort>
      <SortBy selectedText={SortByList[0].name} optionList={SortByList} />
    </Filter.SortConatiner>
  );
};

const FilterCount = ({ items }: FilterProps) => {
  return (
    <>
      <Filter.LabelCount>{items?.length}</Filter.LabelCount>
      <span>movies found</span>
    </>
  );
};

export default React.memo(FilterComponent);
