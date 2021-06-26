import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  .user-info {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    span {
      margin-left: 8px;
      color: #737380;
      font-weight: 500;
      font-size: 14px;
    }
  }
`