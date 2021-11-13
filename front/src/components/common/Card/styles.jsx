import styled from "styled-components";
import { colors } from "../../../styles";
export const Card = styled.div`
  position: relative;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  background-color: ${colors.white};
  padding: 0.5rem;
  border-radius: 12px;

  filter: drop-shadow(
    0 0 0.2rem ${(props) => (props.isLight ? colors.red : colors.gray)}
  );
`;
