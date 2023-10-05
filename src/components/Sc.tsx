import styled from 'styled-components'


const BD = styled.div`
  background-color: green;
  `;

const H1 = styled.h1`
  color: red;
  `;
  
export function Sample() {
  return (
    <BD>
    <H1>Hello World!</H1>
    <p>My name is Jay</p>
    <a href='#'>Check my CV</a>
    </BD>
  );
}
