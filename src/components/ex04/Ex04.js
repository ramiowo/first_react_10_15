import styled, { keyframes } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(color) => color.$bgColor};
  border-radius: 50%;
`;

const Inbox = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightsalmon;
`;

const BoxAni = keyframes`
0%{
    transform: rotate(0);
}
100%{
    transform: rotate(360deg);
}`;

const Con = styled.div`
  width: 300px;
  height: 300px;
  background-color: lightpink;

  &:hover div {
    background-color: deeppink;
  }

  div {
    width: 100px;
    height: 100px;
    background-color: hotpink;
  }

  animation: ${BoxAni} 5s infinite;
`;

const Ex04 = () => {
  return (
    <div>
      <Box $bgColor="salmon">
        <Inbox></Inbox>
      </Box>
      <Box $bgColor="lightsalmon"></Box>

      <Con>
        <div></div>
      </Con>
    </div>
  );
};

export default Ex04;
