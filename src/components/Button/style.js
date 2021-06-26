import styled from "styled-components";
import * as colors from '../../styles/globalVariables';

export const DefaultButton = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${colors.lightPurple};
  padding: 0 32px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.outlined {
    background: white;
    border: 1px solid ${colors.lightPurple};
    color: ${colors.lightPurple};
  } 
`