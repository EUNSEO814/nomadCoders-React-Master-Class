import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
`;
const rotationAnimation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius:0px;
  }
  50%{
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box2 = styled(Box)`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 3s linear infinite;
  /* span {
    font-size: 36px;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  } */

  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Text = styled.span`
  color: white;
`;

const Btn = styled.button`
  color: white;
  background-color: purple;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minLength: 5 })`
  background-color: bisque;
`;
function App() {
  return (
    <Father>
      <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Circle bgColor="tomato" />
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Box2 bgColor="black">
        <Emoji>😄</Emoji>
      </Box2>
      <Emoji>🔥</Emoji>
      <Emoji>🔥</Emoji>
    </Father>
  );
}

export default App;
