import styled from 'styled-components';
import * as colors from '../../styles/globalVariables';

export const PageWrapper = styled.div`
  margin-bottom: 64px;
`

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid ${colors.middleWhite};

  @media (max-width: 900px){
    padding: 24px 32px;
    margin: 0 auto 64px;
  }

  @media (max-width: 360px){
    padding: 16px 24px;
    margin-bottom: 0;
  }
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

  @media (max-width: 450px){
    flex-direction: column;

    > img {
      margin-bottom: 16px;
    }
  }
`

export const RoomCodeWrapper = styled.div`
  display: flex;
  gap: 16px;

  button {
    height: 40px;
  }

  @media (max-width: 650px){
    flex-direction: column;
  }
`

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;

  .no-questions {
    margin-top: 16px;
    color: ${colors.lightBlack};
  }

  @media (max-width: 900px){
    padding: 0 32px;
    margin: 0 auto 64px;
  }

  @media (max-width: 360px){
    padding: 16px 20px;
  }
`

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    color: ${colors.lightBlack};
  }

  span {
    margin-left: 16px;
    background: ${colors.darkPink};
    border-radius: 99px;
    padding: 8px 16px;
    color: white;
    font-weight: 500;
    font-size: 1.4rem;
  }

  @media (max-width: 360px){
    margin-top: 0;
    justify-content: space-between;

    span {
      font-size: 1.8rem;
    }
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
    font-size: 1.4rem;
    color: ${colors.darkGrey};
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: ${colors.lightPurple};
      text-decoration: underline;
      font-size: 1.4rem;
      font-weight: 500;
      cursor: pointer;
    }
  }

  @media (max-width: 360px){
    flex-direction: column;

    button {
      margin-top: 16px;
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
  font-size: 1.4rem;
  }

  @media (max-width: 360px){
    align-self: flex-start;
  }
`

export const QuestionsList = styled.div`
    margin-top: 32px;
`
