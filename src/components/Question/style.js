import styled from 'styled-components';
import * as colors from '../../styles/globalVariables';

export const QuestionDetails = styled.div`
  background: ${colors.lightWhite};
  border-radius: 8px;
  box-shadow: 0 2px 12px ${colors.boxShadowColor};
  padding: 24px;
  
  &.highlighted {
    background: #f4f0ff;
    border: 1px solid ${colors.lightPurple};
    
    footer .user-info span {
      color: ${colors.lightBlack};
    }
  }
  
  &.answered {
    background: #dbdcdd;
  }

  & + .question {
    margin-top: 8px;
  }

  p {
    color: ${colors.lightBlack};
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: ${colors.lightGrey};
    font-weight: 500;
    font-size: 14px;
  }
`

export const BottomButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: filter 0.2s;

    &.like-button {
      color: ${colors.lightGrey};
      gap: 8px;

      &.liked {
        color: ${colors.lightPurple};
        
        svg path {
          stroke: ${colors.lightPurple};
        }
      }
    }

    &:hover {
      filter: brightness(0.7);
    }
  }
`
