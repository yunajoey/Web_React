import styled from 'styled-components';

const SIZES = {
  large: 30,
  medium: 20,
  small: 16,
};

const Input = styled.input`
  font-size: ${({ size }) => SIZES[size] ?? SIZES['medium']}px;
  border: 2px solid ${({ error }) => (error ? `#f44336` : `#eeeeee`)};
  border-radius: ${({ round }) => (round ? `9999px` : `4px`)};
  outline: none;
  padding: 15px;
  width: 80%;
  margin: 20px; 


  ${({ error }) =>
    !error &&
    `
    &:focus {
      border-color: #7760b4;
    }
  `}
`;

export default Input;
