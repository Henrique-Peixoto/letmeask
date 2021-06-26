import styled from "styled-components";
import * as colors from '../../styles/globalVariables';

export const RoomCodeButton = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  border: 1px solid ${colors.lightPurple};
  cursor: pointer;
  display: flex;

  div {
    background: ${colors.lightPurple};
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 200px;
    font-size: 14px;
    font-weight: 500;
  }
`