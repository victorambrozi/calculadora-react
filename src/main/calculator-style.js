import styled from "styled-components";

const Container = styled.div`
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 45px 45px 45px 45px 45px; 
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

export { Container, Title };
