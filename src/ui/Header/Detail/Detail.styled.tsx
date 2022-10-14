import styled from "styled-components";
import { ThemeColor } from "../../../utils/constants";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 550px;
  padding: 15px 45px;
  top: 0;
  left: 0;
  right: 0;
  position: relative;
  background-color: ${ThemeColor.Secondary};
`;

const Title = styled.label`
  font-size: 40px;
  color: white;
  margin: 0;
  margin-right: 20px;
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 15px;
  z-index: 1;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  flex: 1;
  justify-content: center;
  z-index: 1;
`;

const Poster = styled.img`
  width: 320px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
`;

const Rating = styled.div`
  color: white;
  border: solid 1px white;
  border-radius: 50%;
  padding: 10px;
  font-size: 24px;
`;

const SubTilte = styled.div`
  color: white;
  padding: 10px 0 20px 0;
  font-size: 17px;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
`;

const DateAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${ThemeColor.Primary};
  font-size: 24px;
  &:nth-child(1) {
    margin-right: 50px;
  }
`;

const Overview = styled.div`
  color: white;
  padding: 15px 0;
  font-weight: 300;
  font-size: 20px;
  opacity: 0.5;
`;

export const Detail = {
  Container,
  Top,
  Content,
  Poster,
  Description,
  Rating,
  SubTilte,
  DateAndTime,
  Overview,
  Group,
  Title,
};
