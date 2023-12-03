import styled from 'styled-components';

export const ContactData = styled.p`
  display: flex;
  align-items: center;
  padding: 5px 5px;

  &::before {
    content: '\u2022';
    margin-right: 10px;
    font-size: 26px;
    color: steelblue;
    color: black;
  }
`;

export const BtnDelete = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  font-size: 20px;
  color: white;
  background: linear-gradient(
    98.3deg,
    rgb(0, 0, 0) 10.6%,
    rgb(255, 0, 0) 97.7%
  );
  transition: all 150ms ease-in-out;
  border-radius: 4px;
  border: none;

  &:hover {
    color: white;
    text-shadow: 0 0 2px black;
    box-shadow: 0 0 3px 0 black inset, 0 0 3px 2px black;
  }
`;
