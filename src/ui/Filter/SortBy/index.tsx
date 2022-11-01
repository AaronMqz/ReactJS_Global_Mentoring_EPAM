/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import DropDown from './SortBy.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { ThemeColor } from '../../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import moviesSlices, { getMovies } from '../../../redux/moviesSlice';

type SortByProps = {
  optionList: Array<{ id: string; name: string }>;
};

const SortBy = ({ optionList }: SortByProps) => {
  const [showList, setShowList] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { sortBy } = useAppSelector((state) => state.movies);
  const { sortByAction } = moviesSlices.actions;

  const handleShowList = () => {
    setShowList(!showList);
  };

  const handleSortBy = (e: any) => {
    dispatch(sortByAction(e.target.id));
  };

  useEffect(() => {
    dispatch(getMovies());
  }, [sortBy]);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (showList && ref.current && !ref.current?.contains(e.target)) {
        handleShowList();
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [showList]);

  return (
    <DropDown.Container ref={ref} onClick={() => handleShowList()}>
      <DropDown.SelectedText>
        {optionList.find((item) => item.id === sortBy)?.name}
        <FontAwesomeIcon
          icon={showList ? faCaretUp : faCaretDown}
          color={ThemeColor.Primary}
        />
      </DropDown.SelectedText>

      {showList && (
        <DropDown.List>
          {optionList.map((item) => {
            return (
              <DropDown.Item key={item.id} id={item.id} onClick={handleSortBy}>
                {item.name}
              </DropDown.Item>
            );
          })}
        </DropDown.List>
      )}
    </DropDown.Container>
  );
};

SortBy.propTypes = {
  optionList: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })
  ).isRequired,
};

export default SortBy;
