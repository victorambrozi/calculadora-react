import styled from "styled-components";

const ButtonComponent = styled.button`
  font-size: 1.4em;

  border: none;
  border-right: ${props => props.theme.button.borderButton};
  border-bottom: ${props => props.theme.button.borderButton};
  background: ${props => props.theme.button.bgButton};

  outline: none;

  cursor: pointer;

  &:active {
    background-color: #ccc
  }

  &.double {
    grid-column: span 2;
  }

  &.triple {
    grid-column: span 3;
  }

  &.operation {
    color: #FFF;
    background: #fa8231;
    
    &:active {
      background: #fa8131cc;
    }
  }

`;

export { ButtonComponent };
