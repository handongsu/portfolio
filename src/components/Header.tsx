import ThemeToggle from "./ThemeToggle";
import styled from "styled-components";
import MobileNav from "./MobileNav";

const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  padding-top: 15px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  @media ${({ theme }) => theme.desktop} {
    position: absolute;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontXL};
  font-weight: 700;
  position: relative;
  top: 2px;
  padding-left: 40px;
`;

const SectionTitle = styled.h3`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontL};
`;

function Header() {
  return (
    <HeaderBox>
      <MobileNav />
      <Title>
        <a href="/">DS.</a>
      </Title>
      <SectionTitle>
        <ThemeToggle />
      </SectionTitle>
    </HeaderBox>
  );
}

export default Header;
