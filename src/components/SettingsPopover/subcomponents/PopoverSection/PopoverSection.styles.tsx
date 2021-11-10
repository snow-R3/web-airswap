import styled from "styled-components/macro";

import { StyledTitle } from "../../../Overlay/Overlay.styles";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.darkSubText};
  display: grid;
  grid-template-rows: 1.5rem;
  overflow: hidden;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled(StyledTitle)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 0.75rem;
  &:after {
    margin: 0 0 0 0.5rem;
    background: ${(props) => props.theme.colors.borderGrey};
    height: 1px;
    flex: 1;
    content: "";
  }

  &:before {
    background: none;
  }
`;

export const Line = styled.span`
  background: transparent;
`;
