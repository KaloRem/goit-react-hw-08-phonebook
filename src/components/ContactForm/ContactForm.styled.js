import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border: 3px solid;
  border-radius: 15px;
  margin: 40px auto 0;
  background: radial-gradient(circle at 24.1% 68.8%, #323232 0, #000 99.4%);
`;

export const NameLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const NameInput = styled.input`
  margin-top: 5px;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border: 1px solid black;
  margin-bottom: 16px;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: red;
    box-shadow: 0 0 3px 0 red inset, 0 0 3px 2px red;
  }
`;

export const NumberLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const NumberInput = styled.input`
  margin-top: 5px;
  padding: 8px 12px;
  margin-bottom: 16px;
  font: inherit;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: red;
    box-shadow: 0 0 3px 0 red inset, 0 0 3px 2px red;
  }
`;

export const SubmitBtn = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  font-size: 20px;
  border: none;
  color: white;
  background: linear-gradient(
    98.3deg,
    rgb(0, 0, 0) 10.6%,
    rgb(255, 0, 0) 97.7%
  );
  transition: all 150ms ease-in-out;

  &:hover {
    color: white;
    text-shadow: 0 0 2px black;
    box-shadow: 0 0 3px 0 black inset, 0 0 3px 2px black;
  }
`;
