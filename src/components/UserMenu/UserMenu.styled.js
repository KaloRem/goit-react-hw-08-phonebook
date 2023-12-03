import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Welcome = styled.span`
  font-weight: 700;
  color: black;
  margin-right: 12px;
`;

export const LogOutBtn = styled.button`
  padding: 6px 8px;
  font-weight: 900;
  font: inherit;
  cursor: pointer;
  font-size: 18px;
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
