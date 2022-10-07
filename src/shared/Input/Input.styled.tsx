import styled from "styled-components";
import { ThemeColor } from "../../utils/constants";

const Input = styled.input`
  border: 0;
  background: ${ThemeColor.Secondary};
  border-radius: 4px;
  height: 40px;
  padding: 2px 10px;
  width: 100%;
  color: ${ThemeColor.Text};
  font-size: 16px;
`;

export default Input;
