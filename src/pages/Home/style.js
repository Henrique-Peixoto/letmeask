import styled from 'styled-components';
import * as colors from '../../styles/globalVariables';

export const PageWrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  @media (max-width: 796px){
    flex-direction: column;
  }
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
    width: 100%;
    max-width: 320px;
  }

  strong {
    font: 700 3.6rem 'Poppins', sans-serif;
    line-height: 4.2rem;
    margin-top: 16px;
  }

  p {
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${colors.lightWhite};
    margin-top: 16px;
  }

  @media (max-width: 796px){
    padding: 60px 30px; 
    text-align: center;

    img {
      margin: 0 auto 20px;
    }
  }

  @media (max-width: 360px){
    padding-bottom: 20px;
  }
`

export const Main = styled.main`
  flex: 8;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 796px){
    margin: 64px 0;
    order: -1;
  }
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
    font-size: 2.4rem;
    font-family: 'Poppins', sans-serif;
    margin: 64px 0 24px;
  }

  p {
    font-size: 1.4rem;
    color: ${colors.darkGrey};
    margin-top: 16px;

    a {
      color: ${colors.darkPink};
    }
  }
`

export const CreateRoomButton = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${colors.brick};
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

  &:hover {
    filter: brightness(0.9);
  }
`

export const Separator = styled.div`
  font-size: 1.4rem;
  color: ${colors.lightGrey};
  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${colors.lightGrey};
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${colors.lightGrey};
    margin-left: 16px;
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
