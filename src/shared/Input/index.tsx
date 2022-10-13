import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { ThemeColor } from '../../utils/constants';
import { Input, Icon, InputWrapper } from './Input.styled';

type InputProps = {
  placeholder: string;
  onChange: (params: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value?: string | number;
};

const Date = ({ placeholder, onChange, name, value }: InputProps) => {
  return (
    <InputWrapper>
      <Input
        type="date"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
      <Icon>
        <FontAwesomeIcon icon={faCalendarDays} color={ThemeColor.Primary} />
      </Icon>
    </InputWrapper>
  );
};

const Text = ({ placeholder, onChange, name, value }: InputProps) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
};

export default {
  Text,
  Date,
};
