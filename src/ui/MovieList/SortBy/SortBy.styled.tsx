import styled from 'styled-components';
import { ThemeColor } from '../../../utils/constants';

const Container = styled.div`
  display: flex;
  width: 160px;
  justify-content: center;
  cursor: pointer;
  position: relative;
  align-items: flex-start;
  padding-bottom: 15px;
  &:hover {
    border-bottom: solid 3px ${ThemeColor.Primary};
    position: relative;
    top: 3px;
  }
`;

const SelectedText = styled.div`
  display: flex;
  color: white;
  width: 100%;
  justify-content: space-around;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  position: absolute;
  top: 22px;
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

export default {
  Container,
  SelectedText,
  List,
  Item,
};
