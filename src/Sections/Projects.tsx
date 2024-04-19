import styled from "styled-components";
import ProjectComp from "../components/ProjectComp";

const ProjectContent = styled.div`
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

function Projects() {
  return (
    <ProjectContent id="project">
      <Title>프로젝트</Title>
      <ProjectComp
        title={"Portfolio"}
        image={"portfolio.gif"}
        link={`https://dongsu-portfolio.netlify.app/`}
        repo={`https://github.com/handongsu/portfolio`}
        content={`프론트엔드 취업을 위한 프로젝트입니다. 노션을 이용한 포트폴리오
        페이지에서 링크 트리의 불편함을 느껴, 한 페이지에서 편리한 정보 조회가
        가능한 포트폴리오 웹을 개발했습니다. 편리하고 효율적인 정보 탐색을
        제공하기 위해 클릭을 이용한 스크롤 이동을 주요 기능으로 개발하였습니다.`}
        skills={[
          " React.js, TypeScript, Styled-Component, Context-api, CSS, MUI, Email.js",
        ]}
      />
      <ProjectComp
        title={"Catlendar"}
        image={"catlendar.gif"}
        link={`https://catlendar.netlify.app/`}
        repo={`https://github.com/Catlendar/catlendar-frontend`}
        content={`캣린더(Catlendar)는 고양이를 테마로 한 투두 리스트 및 일정 관리 앱으로,
              사용자들에게 운세를 통한 영감과 긍정적인 목표 설정을 돕는 데 중점을 둔 서비스입니다.`}
        skills={[
          "React.js, TypeScript, CSS, Recoil, Styled-Component, React-Query, chart.js",
        ]}
      />
      <ProjectComp
        title={"FitBuddy"}
        image={
          "https://github.com/FRONTENDSCHOOL7/final-21-FitBuddy/assets/139687655/f4a2c6d4-d4f2-4f23-b8c1-224ad7567fe9"
        }
        link={`https://main--spiffy-kleicha-22273b.netlify.app/`}
        repo={`https://github.com/FRONTENDSCHOOL7/final-21-FitBuddy`}
        content={`'핏버디'는 운동에 대한 열정을 공유하고, 함께 땀 흘리며 건강한 생활을 이어갈 친구들을 만날 수 있는 운동 커뮤니티입니다.
핏버디는 다양한 운동 종목을 즐기는 회원들과 지식을 공유하며 서로 영감을 주고 받을 수 있습니다.
나의 관심사에 맞춘 게시글을 통해 다양한 운동활동에 참여를 할 수 있고, 커뮤니티를 통해 운동에 관한 정보와 조언을 얻을 수 있습니다.`}
        skills={[
          " React.js, JavaScript, CSS, Recoil, Styled-Component,Figma, chart.js, ",
        ]}
      />
    </ProjectContent>
  );
}

export default Projects;
