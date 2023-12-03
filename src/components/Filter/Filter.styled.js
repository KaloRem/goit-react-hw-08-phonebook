import styled from 'styled-components';

export const FilterWrapper = styled.div`
  margin: 20px auto 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const FilterLabel = styled.label`
  color: #000000;
  font-size: 20px;
  margin-bottom: 5px;
  font-style: italic;
`;

export const FilterInput = styled.input`
  width: 400px;
  padding: 10px;
  margin: 5px auto 0;
  border-radius: 4px;
  border: 2px solid #3498db;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 3px 0 #3498db inset, 0 0 3px 2px #3498db;
  }
`;
