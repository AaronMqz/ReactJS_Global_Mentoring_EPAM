import styled from 'styled-components';
import { ThemeColor } from '../../utils/constants';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: ${ThemeColor.Secondary};
  padding: 60px 77px;
  position: relative;
  width: 750px;
`;

const IconClose = styled.div`
  position: absolute;
  color: white;
  right: 20px;
  top: 20px;
  font-size: 30px;
  cursor: pointer;
`;

export const Modal = {
  Container,
  Content,
  IconClose,
};
