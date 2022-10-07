import styled from "styled-components";
import { ThemeColor } from "../../utils/constants";

const Primary = styled.div`
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${ThemeColor.Primary};
  color: white;
  font-size: 16px;
  padding: 5px;
  margin-left: 10px;
  width: 150px;
`;

const Add = styled(Primary)`
  background: rgba(255, 255, 255, 0.2);
  color: ${ThemeColor.Primary};
  width: 125px;
`;

export default {
  Primary,
  Add,
};