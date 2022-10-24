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
  padding: 10px;
  margin-left: 10px;
  width: 150px;
`;

const Secondary = styled(Primary)`
  background: ${ThemeColor.Secondary};
  border: solid 1px ${ThemeColor.Primary};
  color: ${ThemeColor.Primary};
`;

const Add = styled(Primary)`
  background: rgba(255, 255, 255, 0.2);
  color: ${ThemeColor.Primary};
  width: 125px;
`;

const Icon = styled(Primary)`
  background: none;
  color: ${ThemeColor.Primary};
  font-size: 21px;
  padding-top: 0px;
  width: 21px;
`;

export default {
  Primary,
  Secondary,
  Add,
  Icon,
};
