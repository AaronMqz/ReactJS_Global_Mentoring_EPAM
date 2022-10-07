import styled from 'styled-components';
import { ThemeColor } from '../../utils/constants';

const Input = styled.input`
  border: 0;
  background: ${ThemeColor.Input};
  border-radius: 4px;
  height: 40px;
  padding: 2px 10px;
  width: 100%;
  color: ${ThemeColor.Text};
  font-size: 16px;
  box-sizing: border-box;
  &[type='date']::-webkit-inner-spin-button,
  &[type='date']::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;

const InputWrapper = styled.span`
  display: flex;
  position: relative;
`;

const Icon = styled.span`
  display: flex;
  position: absolute;
  right: 10px;
  height: 100%;
  align-items: center;
`;

export { Input, Icon, InputWrapper };
