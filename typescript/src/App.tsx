// import Circle from "./Circle";
import styled from "styled-components";
import { useState } from "react";
const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  active?: boolean;
}

const Dummy = ({ text, active = false }: DummyProps) => {
  return <H1>{text}</H1>;
};

function App() {
  const [value, setValue] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    // console.log(e.currentTarget.value);
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello", value);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {};
  return (
    // <div>
    //   <Circle borderColor="yellow" bgColor="teal" />
    //   <Circle text="i'm here" bgColor="tomato" />
    // </div>
    <>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
      <Container>
        <Dummy text="hello" />
        <button onClick={onClick}>Click Me!</button>
      </Container>
    </>
  );
}

export default App;
