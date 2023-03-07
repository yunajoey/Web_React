import styled from "styled-components";

const SIZES = {
  large: 24,
  medium: 18,
  small: 16,
};

const Button = styled.button`
  background-color: #6750a4;
  border: none;
  border-radius: ${({ round }) => (round ? `9999px` : `4px`)};
  font-size: ${({ size }) => SIZES[size] ?? SIZES["medium"]}px;
  color: #ffffff;
  padding: 5px 30px;
  &:hover,
  &:active {
    background-color: #463770;
  }
`;

export default Button;
