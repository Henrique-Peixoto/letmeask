import styled from 'styled-components';
import * as colors from '../../styles/globalVariables';

export const PageWrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`

export const Aside = styled.aside`
  flex: 7;
  background: ${colors.lightPurple};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    color: ${colors.lightWhite};
    margin-top: 16px;
  }
`

export const Main = styled.main`
    flex: 8;
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }

  h2 {
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    margin: 64px 0 24px;
  }

  p {
    font-size: 14px;
    color: ${colors.darkGrey};
    margin-top: 16px;

    a {
      color: ${colors.darkPink};
    }
  }
`

export const Form = styled.form`
  input {
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background: white;
    border: 1px solid ${colors.lightGrey};
  }

  button {
    margin-top: 16px;
  }

  button, input {
    width: 100%;
  }
`
