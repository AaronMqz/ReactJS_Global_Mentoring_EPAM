import styled from "styled-components";
import { ThemeColor } from "../../utils/constants";

type Props = {
  active: boolean;
};

const Container = styled.div`
  margin-top: 10px;
  padding: 0px 45px 0 45px;
  background: ${ThemeColor.Secondary};
  color: white;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  flex-wrap: wrap;
  border-bottom: solid 3px ${ThemeColor.TagLine};
`;

const FilterContent = styled.div`
  display: flex;
  height: 40px;
  padding-top: 15px;
  align-items: flex-end;
`;

const Count = styled.div`
  padding: 15px 0;
`;

const LabelFilter = styled.label<Props>`
  margin-right: 15px;
  bottom: -3px;
  position: relative;
  padding-bottom: 15px;
  cursor: pointer;
  border-bottom: solid 3px transparent;
  &:hover {
    border-bottom: solid ${ThemeColor.Primary};
  }
  ${(props) =>
    props.active
      ? `border-bottom: solid 3px ${ThemeColor.Primary}`
      : `border-bottom: solid 3px ${ThemeColor.TagLine}`}
`;

const SortConatiner = styled.div`
  display: flex;
  padding-top: 15px;
  align-items: flex-end;
`;

const LabelSort = styled.label`
  color: lightgray;
  padding-bottom: 15px;
`;

const LabelCount = styled.label`
  padding-right: 5px;
  font-weight: bold;
`;

export default {
  Container,
  Section,
  Count,
  LabelFilter,
  LabelCount,
  LabelSort,
  SortConatiner,
  FilterContent,
};
