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
  transform: perspective(800px) rotateY(0deg);
  transform-style: preserve-3d;
  /* backface-visibility: hidden; */

  img {
    display: block;
    border-radius: 50%;
    width: 200px;
    height: 200px;
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
    transform: perspective(800px) rotateY(180deg);
  }
`;

const Back = styled.div`
  background-color: white;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

function About() {
  return (
    <AboutBox>
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
        </Info>
      </InfoBox>
    </AboutBox>
  );
}

export default About;
