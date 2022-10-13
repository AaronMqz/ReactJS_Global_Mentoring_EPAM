/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { ThemeColor } from '../../utils/constants';
import { DropDown } from './DropDown.styled';

type checkBoxProps = {
  label: string;
  checked: boolean;
  onChange: (params: Array<string>) => void;
  selectedItems: Array<string>;
};

const Checkbox = ({
  label,
  checked,
  onChange,
  selectedItems,
}: checkBoxProps) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prev) => !prev);
    const array = [...selectedItems];
    selectedItems.indexOf(e.target.name) === -1
      ? array.push(e.target.name)
      : array.splice(array.indexOf(e.target.name), 1);
    onChange(array);
  };

  return (
    <DropDown.CheckboxContainer>
      <label>
        <DropDown.Checkbox
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          name={label}
        />
        <DropDown.Label>{label}</DropDown.Label>
      </label>
    </DropDown.CheckboxContainer>
  );
};

type dropDownProps = {
  selectedItems: Array<string>;
  optionList: Array<string>;
  onChange: (params: Array<string>) => void;
};

const DropDownOptionsComponent = ({
  selectedItems,
  optionList,
  onChange,
}: dropDownProps) => {
  const [showList, setShowList] = useState(false);
  const [items, setItems] = useState(selectedItems);
  const ref = useRef<HTMLDivElement>(null);

  const handleShowList = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (showList && ref.current && !ref.current.contains(e.target)) {
        handleShowList();
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [showList]);

  useEffect(() => {
    return onChange(items);
  }, [items]);

  useEffect(() => {
    if (selectedItems !== items) {
      setItems(selectedItems);
    }
  }, [selectedItems]);

  return (
    <DropDown.Container ref={ref}>
      <DropDown.SelectedText onClick={() => handleShowList()}>
        {items.join(', ')}
        <FontAwesomeIcon
          icon={showList ? faCaretUp : faCaretDown}
          color={ThemeColor.Primary}
        />
      </DropDown.SelectedText>
      {showList && (
        <DropDown.List>
          {optionList.map((item) => {
            return (
              <Checkbox
                key={item}
                label={item}
                checked={items.indexOf(item) !== -1}
                selectedItems={items}
                onChange={(newItems) => setItems(newItems)}
              />
            );
          })}
        </DropDown.List>
      )}
    </DropDown.Container>
  );
};

export default DropDownOptionsComponent;
