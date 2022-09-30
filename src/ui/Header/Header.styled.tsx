import styled from "styled-components";
import movies from "../../assets/movies.png";

const Title = styled.label`
  font-size: 40px;
  color: white;
  margin-bottom: 20px;
`;

const Container = styled.header`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.8);
  height: 300px;
  padding: 15px 45px;
  top: 0;
  left: 0;
  right: 0;
  position: relative;
`;

const BackgroundImage = styled.div`
  background-image: url(${movies});
  filter: blur(2px);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  left: 0;
  top: 0;
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  align-self: center;
  flex: 1;
  justify-content: center;
`;

const FormSearch = styled.div`
  display: flex;
`;

export default {
  Title,
  Container,
  Top,
  Content,
  FormSearch,
  BackgroundImage,
};
