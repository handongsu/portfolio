import styled from "styled-components";
import * as AiIcons from "react-icons/ai";

const FooterBox = styled.footer`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.mobileSmall} {
    font-size: 12px;
  }
`;

const FooterBottom = styled.div`
  margin-top: ${(props) => props.theme.marginS};

  a {
    margin-right: ${(props) => props.theme.marginS};
  }
`;

function Footer() {
  return (
    <FooterBox>
      <small>Copyright 2024. Handongsu All rights reserved.</small>
      <FooterBottom>
        <a
          href="https://github.com/handongsu/portfolio"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub/portfolio
        </a>
        <AiIcons.AiFillGithub />
      </FooterBottom>
    </FooterBox>
  );
}

export default Footer;
