import styled from "styled-components";

const Normal = styled.label`
  font-size: 20px;
  color: #f65261;
  font-weight: normal;
`;

const Strong = styled(Normal)`
  font-weight: bold;
`;

export default {
  Strong,
  Normal,
};
