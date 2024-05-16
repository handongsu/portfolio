import ThemeToggle from "../components/ThemeToggle";
import styled from "styled-components";
import MobileNav from "../components/MobileNav";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

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

const Icon = styled.button`
  font-size: 35px;
  padding-top: 5px;
  cursor: pointer;
`;

function Header() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <HeaderBox>
      {location !== "/" ? (
        <Icon onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </Icon>
      ) : (
        <MobileNav />
      )}

      <Title>
        <a href="/">DS Portfolio</a>
      </Title>
      <SectionTitle>
        <ThemeToggle />
      </SectionTitle>
    </HeaderBox>
  );
}

export default Header;
