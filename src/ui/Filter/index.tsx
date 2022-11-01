/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import Filter from './Filter.styled';
import SortBy from './SortBy';
import { Genres } from '../../utils/constants';
import { SortByList } from '../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import moviesSlices, { getMovies } from '../../redux/moviesSlice';

const FilterComponent = () => {
  return (
    <Filter.Container>
      <Filter.Section>
        <FilterByGenres />
        <FilterSortBy />
      </Filter.Section>
      <Filter.Count>
        <FilterCount />
      </Filter.Count>
    </Filter.Container>
  );
};

const FilterByGenres = () => {
  const dispatch = useAppDispatch();
  const { filterBy } = useAppSelector((state) => state.movies);
  const { filterByAction } = moviesSlices.actions;

  const handleFilterBy = (e: any) => {
    dispatch(filterByAction(e.target.id));
  };

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch, filterBy]);

  return (
    <Filter.FilterContent>
      <Filter.LabelFilter active={filterBy === ''} onClick={handleFilterBy}>
        {'ALL'}
      </Filter.LabelFilter>
      {Genres.map((item, index) => {
        return (
          <Filter.LabelFilter
            active={item === filterBy}
            key={index}
            id={item}
            onClick={handleFilterBy}
          >
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
      <SortBy optionList={SortByList} />
    </Filter.SortConatiner>
  );
};

const FilterCount = () => {
  const { data } = useAppSelector((state) => state.movies);
  return (
    <>
      <Filter.LabelCount>{data.length}</Filter.LabelCount>
      <span>movies found</span>
    </>
  );
};

export default React.memo(FilterComponent);
