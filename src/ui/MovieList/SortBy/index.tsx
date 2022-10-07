/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import DropDown from './SortBy.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { ThemeColor } from '../../../utils/constants';

type SortByProps = {
  selectedText: string;
  optionList: Array<{ id: string; name: string }>;
};

const SortBy = ({ selectedText, optionList }: SortByProps) => {
  const [showList, setShowList] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleShowList = () => {
    setShowList(!showList);
  };

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
        {selectedText}
        <FontAwesomeIcon
          icon={showList ? faCaretUp : faCaretDown}
          color={ThemeColor.Primary}
        />
      </DropDown.SelectedText>

      {showList && (
        <DropDown.List>
          {optionList.map((item) => {
            return (
              <DropDown.Item key={item.id} id={item.id}>
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
  selectedText: PropTypes.string.isRequired,
  optionList: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })
  ).isRequired,
};

export default SortBy;
