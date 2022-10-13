import styled from 'styled-components';
import { Input } from '../Input/Input.styled';
import { ThemeColor } from '../../utils/constants';

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const RowItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:nth-child(2) {
    width: 400px;
    margin-left: 20px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.label`
  font-size: 40px;
  color: white;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  color: ${ThemeColor.Primary};
  margin-bottom: 10px;
`;

const Message = styled(Label)`
  color: white;
  margin-bottom: 30px;
`;

const TextArea = styled.textarea`
  border: 0;
  background: ${ThemeColor.Input};
  border-radius: 4px;
  height: 200px;
  padding: 2px 10px;
  width: 100%;
  color: ${ThemeColor.Text};
  font-size: 16px;
  box-sizing: border-box;
  resize: none;
`;

export default {
  Content,
  Row,
  RowItem,
  Footer,
  Title,
  Input,
  Label,
  TextArea,
  Message,
};
