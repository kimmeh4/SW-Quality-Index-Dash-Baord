import styled from "styled-components";
import { fonts, colors } from "../../../styles";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  height: 65px;
  background-color: ${colors.navy};
  color: ${colors.white};
  font-size: ${fonts.xl};
  font-weight: 700;
  padding-left: 24px;
  z-index: 99;
`;
