import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 70vw;
  margin: 25vw auto 5vw auto;
  display: flex;
  flex-direction: column;
  line-height: 100px;
`;

const glitch1 = keyframes`
  0%, 100% {
    transform: none;
    opacity: 1;
  }
  7% {
    transform: skew(-0.5deg, -0.9deg);
    opacity: 0.75;
  }
  10%{
    transform: none;
    opacity: 1;
  }
  27%{
    transform: none;
    opacity: 1;
  }
  30% {
    transform: skew(0.8deg, -0.1deg);
    opacity: 0.75;
  }
  35%{
    transform: none;
    opacity: 1;
  }
  52%{
    transform: none;
    opacity: 1;
  }
  55% {
    transform: skew(-1deg, 0.2deg);
    opacity: 0.75;
  }
  50%{
    transform: none;
    opacity: 1;
  }
  72%{
    transform: none;
    opacity: 1;
  }
  75% {
    transform: skew(0.4deg, 1deg);
    opacity: 0.75;
  }
  80%{
    transform: none;
    opacity: 1;
  }
  100%{
    transform: none;
    opacity: 1;
  }
`;

const glitch2 = keyframes`
  0% {
    transform: none;
    opacity: 0.25;
  }
  7% {
    transform: translate(-2px, -3px);
    opacity: 0.5;
  }
  10%{
    transform: none;
    opacity: 0.25;
  }
  27%{
    transform: none;
    opacity: 0.25;
  }
  30% {
    transform: translate(-5px, -2px);
    opacity: 0.5;
  }
  35%{
    transform: none;
    opacity: 0.25;
  }
  52%{
    transform: none;
    opacity: 0.25;
  }
  55% {
    transform: translate(-5px, -1px);
    opacity: 0.5;
  }
  50%{
    transform: none;
    opacity: 0.25;
  }
  72%{
    transform: none;
    opacity: 0.25;
  }
  75% {
    transform: translate(-2px, -6px);
    opacity: 0.5;
  }
  80%{
    transform: none;
    opacity: 0.25;
  }
  100%{
    transform: none;
    opacity: 0.25;
  }
`;

const glitch3 = keyframes`
   0% {
    transform: none;
    opacity: 0.25;
  }
  7% {
    transform: translate(2px, 3px);
    opacity: 0.5;
  }
  10% {
    transform: none;
    opacity: 0.25;
  }
  27% {
    transform: none;
    opacity: 0.25;
  }
  30% {
    transform: translate(5px, 2px);
    opacity: 0.5;
  }
  35% {
    transform: none;
    opacity: 0.25;
  }
  52% {
    transform: none;
    opacity: 0.25;
  }
  55% {
    transform: translate(5px, 1px);
    opacity: 0.5;
  }
  50% {
    transform: none;
    opacity: 0.25;
  }
  72% {
    transform: none;
    opacity: 0.25;
  }
  75% {
    transform: translate(2px, 6px);
    opacity: 0.5;
  }
  80% {
    transform: none;
    opacity: 0.25;
  }
  100% {
    transform: none;
    opacity: 0.25;
  }
`;

const HBase = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.bgColor};
  font-size: 5em;
  letter-spacing: 8px;
  font-family: "DungGeunMo";

  margin: 0;
  line-height: 0;
`;

const H1First = styled(HBase)`
  animation: ${glitch1} 2.5s infinite;
`;

const H1Second = styled(HBase)`
  color: #67f3da;
  animation: ${glitch2} 2.5s infinite;
`;

const H1Third = styled(HBase)`
  color: #f16f6f;
  animation: ${glitch3} 2.5s infinite;
`;

const Group = styled.div`
  height: 150px;
`;

function Home() {
  return (
    <Container id="home">
      <Group>
        <H1First>Hello</H1First>
        <H1Second>Hello</H1Second>
        <H1Third>Hello</H1Third>
      </Group>
      <Group>
        <H1First>Frontend_Developer</H1First>
        <H1Second>Frontend_Developer</H1Second>
        <H1Third>Frontend_Developer</H1Third>
      </Group>
      <Group>
        <H1First>Dongsu</H1First>
        <H1Second>Dongsu</H1Second>
        <H1Third>Dongsu</H1Third>
      </Group>
    </Container>
  );
}

export default Home;
