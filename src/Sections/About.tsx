import styled from "styled-components";
import profile from "../assets/IMG_4391.jpeg";

const AboutBox = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: ${({ theme }) => theme.marginL} 0;
  margin: ${({ theme }) => theme.paddingL} 0;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.marginL};
  font-size: ${({ theme }) => theme.fontXXL};
  font-family: "DNFBitBitv2";

  @media ${({ theme }) => theme.tablet} {
    margin-bottom: ${({ theme }) => theme.marginXXL};
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  @media ${({ theme }) => theme.deskTop} {
    flex-direction: row;
    justify-content: center;
  }
`;

const Info = styled.div`
  @media ${({ theme }) => theme.tablet} {
    width: 80%;
  }
  @media ${({ theme }) => theme.deskTop} {
    width: 50%;
  }
`;

const Intro = styled.p`
  padding-bottom: ${({ theme }) => theme.paddingL};
  margin: ${({ theme }) => theme.marginL};
  border-bottom: 1px solid;
  line-height: 2;
`;

const Image = styled.div`
  transition: 0.5s;
  transform-style: preserve-3d;
  position: relative;

  img {
    display: block;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    backface-visibility: hidden;
  }

  @media ${({ theme }) => theme.tablet} {
    img,
    div {
      width: 250px;
      height: 250px;
    }
  }

  @media ${({ theme }) => theme.deskTop} {
    margin-right: ${({ theme }) => theme.marginL};
  }

  &:hover {
    transform: rotateY(180deg);
  }
`;

const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => (theme.textColor === "black" ? "#fff" : "#000")};
  background-color: ${({ theme }) =>
    theme.textColor === "black" ? "#000" : "#fff"};
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 5px;
`;
function About() {
  return (
    <AboutBox id="about">
      <Title>소개</Title>
      <InfoBox>
        <Image>
          <img src={profile} alt="dongsu" />
          <Back>
            <span>📞 010-3947-2736</span>
            <span>✉️ kku304@naver.com</span>
          </Back>
        </Image>
        <Info>
          <Intro>
            <span>안녕하세요, 프론트엔드 개발자 한동수입니다</span>
            <br />
            <br />
            <span>
              🔥 꾸준히 학습하고 발전하는 것에 관심이 많은 주니어개발자
              한동수입니다.
            </span>
            <br />
            <span>
              🔥 React.js와 TypeScript를 주력으로 개발하고 있으며, 다른 기술을
              익히는데 관심이 있습니다.
            </span>
            <br />
            <span>
              🔥 일상에서 마주한 불편함으로, 더 나은 사용자경험에 대해
              고민합니다.
            </span>
          </Intro>
          <Skills>
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" />
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />
            <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" />
            <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black" />
            <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" />
          </Skills>
          <Skills>
            <img src="https://img.shields.io/badge/Styled%20Components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" />
            <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white" />
            <img src="https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=black" />
            <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
            <img src="https://img.shields.io/badge/Figma-F24E1E5?style=for-the-badge&logo=figma&logoColor=white" />
          </Skills>
        </Info>
      </InfoBox>
    </AboutBox>
  );
}

export default About;
