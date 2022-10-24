import styled from "styled-components";
import { ThemeColor } from "../../utils/constants";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 45px;
  justify-content: space-between;
  background: ${ThemeColor.Secondary};
`;

export default {
  Container,
};
