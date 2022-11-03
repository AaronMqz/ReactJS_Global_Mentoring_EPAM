import styled from 'styled-components';
import { ThemeColor } from '../../../utils/constants';

type Props = {
  hover: boolean;
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  position: relative;
  cursor: pointer;
  transition: transform 500ms;
  &:hover {
    transform: scale(1.05);
  }
  width: 320px;
`;

const Poster = styled.img`
  width: 320px;
  margin-bottom: 20px;
  min-height: 480px;
  object-fit: contain;
  background-color: #f3f3f3;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  color: white;
`;

const Tagline = styled.div`
  font-size: 16px;
  color: ${ThemeColor.TagLine};
`;

const Year = styled.div`
  color: lightgray;
  border: solid 1px ${ThemeColor.TagLine};
  border-radius: 6px;
  padding: 2px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const MenuIcon = styled.span<Props>`
  display: flex;
  border-radius: 50%;
  background: ${ThemeColor.Secondary};
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 15px;
  color: white;
  ${(props) => (props.hover ? 'display:flex' : 'display:none')}
`;

export default {
  Card,
  Poster,
  Content,
  TitleContent,
  Title,
  Tagline,
  Year,
  MenuIcon,
};
