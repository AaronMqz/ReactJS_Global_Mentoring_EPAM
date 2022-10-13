import styled from 'styled-components';
import { ThemeColor } from '../../../utils/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${ThemeColor.Secondary};
  width: 200px;
  position: absolute;
  top: 0;
  right: 0;
`;

const Label = styled.div`
  padding: 10px 40px;
  &:hover {
    background: ${ThemeColor.Primary};
  }
`;

export default {
  Container,
  Label,
};
