import styled from "styled-components";
export const Button = styled.button`
  padding: 4px 10px;
  background-color: ${(props) => props.bgColor};
  color: black;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
`;
