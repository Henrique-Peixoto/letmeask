import styled from 'styled-components';
import * as colors from '../../styles/globalVariables';

export const PageWrapper = styled.div`
  margin-bottom: 64px;
`

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid ${colors.middleWhite};
`

export const HeaderContent = styled.div`
max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
  }

  div {
    display: flex;
    gap: 16px;

    button {
      height: 40px;
    }
  }
`

export const RoomCodeWrapper = styled.div`
  display: flex;
  gap: 16px;

  button {
    height: 40px;
  }
`

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
`

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: ${colors.lightBlack};
  }

  span {
    margin-left: 16px;
    background: ${colors.darkPink};
    border-radius: 99px;
    padding: 8px 16px;
    color: white;
    font-weight: 500;
    font-size: 14px;
  }
`

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: ${colors.whitestWhite};
    box-shadow: 0 2px 12px ${colors.boxShadowColor};
    resize: vertical;
    min-height: 130px;
  }
`

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  > span {
    font-size: 14px;
    color: ${colors.darkGrey};
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: ${colors.lightPurple};
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
  }
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
  color: ${colors.lightBlack};
  font-weight: 500;
  font-size: 14px;
  }
`

export const QuestionsList = styled.div`
    margin-top: 32px;
`
