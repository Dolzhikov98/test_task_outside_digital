import styled from 'styled-components';

export const Button = styled.button`
  max-width: 198px;
  width: 100%;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 16px 32px;
  background-color: #ff5e56;

  box-shadow: 0px -0.11px 16.9495px rgba(183, 187, 225, 0.33);

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    font-family: Lab Grotesque;
    font-style: normal;
    filter: drop-shadow(0px 0px 44px #cfdae7);
    color: #ffffff;
  }

  :hover {
    background: #ffffff;
    span {
      color: #000000;
    }
  }
`;
