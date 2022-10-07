import styled from "styled-components";
import error from "../../assets/error.png";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100vh;
`;

const ErrorImage = styled.div`
  background-image: url(${error});
  width: 400px;
  height: 400px;
`;

const Text = styled.div`
  font-size: 60px;
`;

export default {
  Container,
  ErrorImage,
  Text,
};
