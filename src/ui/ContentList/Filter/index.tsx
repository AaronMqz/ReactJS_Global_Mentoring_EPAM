import React from "react";
import PropTypes from "prop-types";
import Filter from "./Filter.styled";
import SortBy from "../SortBy";
import { getMoviesGenres } from "../../../utils/";
import { SortByList } from "../../../utils/constants";

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

type FilterProps = {
  items: Array<MovieItem>;
};

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
      {getMoviesGenres(items).map((item, index) => {
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
      <Filter.LabelCount>{items.length}</Filter.LabelCount>
      <span>movies found</span>
    </>
  );
};

FilterComponent.prototype = {
  items: PropTypes.arrayOf(PropTypes.object),
};

FilterCount.prototype = {
  items: PropTypes.arrayOf(PropTypes.object),
};

FilterByGenres.prototype = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default FilterComponent;
