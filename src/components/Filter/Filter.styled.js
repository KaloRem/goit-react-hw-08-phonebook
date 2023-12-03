import styled from 'styled-components';

export const FilterWrapper = styled.div`
  margin: 20px auto 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const FilterLabel = styled.label`
  color: black;
  font-size: 20px;
  margin-bottom: 5px;
  font-style: italic;
`;

export const FilterInput = styled.input`
  width: 400px;
  padding: 10px;
  margin: 5px auto 0;
  border-radius: 4px;
  border: 3px solid black;

  &:focus {
    outline: none;
    border-color: red;
    box-shadow: 0 0 3px 0 red inset, 0 0 3px 2px red;
  }
`;
