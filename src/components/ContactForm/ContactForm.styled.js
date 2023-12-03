import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border: 3px solid;
  border-radius: 4px;
  margin: 40px auto 0;
`;

export const NameLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const NameInput = styled.input`
  margin-top: 5px;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border: 1px solid black;
  margin-bottom: 16px;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 3px 0 #3498db inset, 0 0 3px 2px #3498db;
  }
`;

export const NumberLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const NumberInput = styled.input`
  margin-top: 5px;
  padding: 8px 12px;
  margin-bottom: 16px;
  font: inherit;
  cursor: pointer;
  border: 1px solid black;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 3px 0 #3498db inset, 0 0 3px 2px #3498db;
  }
`;

export const SubmitBtn = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  font-size: 20px;
  border: none;
  color: #fff;
  background: #3498db;
  transition: all 150ms ease-in-out;

  &:hover {
    color: transparent;
    text-shadow: 0 0 2px #fff;
    box-shadow: 0 0 3px 0 #3498db inset, 0 0 3px 2px #3498db;
  }
`;
