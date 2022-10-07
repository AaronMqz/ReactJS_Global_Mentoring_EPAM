import styled from 'styled-components';
import { ThemeColor } from '../../utils/constants';

const Container = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: relative;
  align-items: center;
`;

const SelectedText = styled.div`
  display: flex;
  color: white;
  width: 100%;
  justify-content: flex-start;
  background: ${ThemeColor.Input};
  height: 40px;
  padding: 2px 10px;
  border-radius: 4px;
  box-sizing: border-box;
  align-items: center;
  & > * {
    position: absolute;
    right: 10px;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  position: absolute;
  top: 40px;
  left: 0px;
  z-index: 10;
  background-color: ${ThemeColor.Secondary};
`;

const Item = styled.div`
  display: flex;
  padding: 10px 15px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    background: ${ThemeColor.Primary};
  }
`;

const CheckboxContainer = styled.div`
  margin: 5px;
`;

const Checkbox = styled.input`
  accent-color: ${ThemeColor.Primary};
`;

const Label = styled.span`
  color: #fff;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const DropDown = {
  Container,
  SelectedText,
  List,
  Item,
  CheckboxContainer,
  Checkbox,
  Label,
};
