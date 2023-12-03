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
    color: white;
  }
`;

export const BtnDelete = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  background: #3498db;
  transition: all 150ms ease-in-out;
  border-radius: 4px;
  border: none;

  &:hover {
    color: transparent;
    text-shadow: 0 0 2px #fff;
    box-shadow: 0 0 3px 0 #3498db inset, 0 0 3px 2px #3498db;
  }
`;
