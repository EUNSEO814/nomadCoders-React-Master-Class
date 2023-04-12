import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1``;

const TopBar = () => {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const onClickHandler = () => {
    console.log("clicked");
    setDarkAtom((prev) => !prev);
  };
  return (
    <Header>
      <Title>Trello</Title>
      <button onClick={onClickHandler}>test</button>
    </Header>
  );
};
export default TopBar;
