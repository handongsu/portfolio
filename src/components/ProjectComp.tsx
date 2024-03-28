import styled from "styled-components";
import image from "../assets/react-query.gif";

const ProjectBox = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ${({ theme }) => theme.marginXL};
  font-family: "SejonghospitalLight";
`;

const Image = styled.div`
  margin-bottom: ${(props) => props.theme.marginL};

  img {
    margin: 0 auto;
    display: block;
    width: 250px;
    height: 200px;
  }

  @media ${(props) => props.theme.tabletMedium} {
    img {
      width: 350px;
    }
  }

  @media ${(props) => props.theme.deskTop} {
    margin: 0 ${(props) => props.theme.marginXXL} 0 0;

    img {
      width: 450px;
    }
  }
`;

const Title = styled.h1`
  font-family: "DNFBitBitv2";
  /* text-align: center; */
`;

const Link = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 30px;
`;

const SS = styled.span`
  background-color: grey;
  font-size: 16px;
  padding: 5px;
  border-radius: 10px;
`;

const DescBox = styled.div`
  line-height: 2;
  padding: ${(props) => props.theme.paddingS};

  h3 {
    font-family: "DNFBitBitv2";
    line-height: 4;
  }
`;

function ProjectComp() {
  return (
    <ProjectBox>
      <div>
        <Image>
          <img src={image} />
        </Image>
        <Link>
          <Title>Catlendar</Title>
          <div>
            <SS>배포 링크</SS>
            <br />
            <br />
            <a href="https://github.com/handongsu/portfolio">
              https://github.com/handongsu/portfolio
            </a>
            <br />
            <br />
            <SS>레포지토리 주소</SS>
            <br />
            <br />
            <a href="https://github.com/handongsu/portfolio">
              https://github.com/handongsu/portfolio
            </a>
          </div>
        </Link>
      </div>
      <DescBox>
        <h3>프로젝트 소개</h3>
        프론트엔드 취업을 위한 프로젝트입니다. 노션을 이용한 포트폴리오
        페이지에서 링크 트리의 불편함을 느껴, 한 페이지에서 편리한 정보 조회가
        가능한 포트폴리오 웹을 개발했습니다. 편리하고 효율적인 정보 탐색을
        제공하기 위해 클릭을 이용한 스크롤 이동을 주요 기능으로 개발하였습니다.
        <h3>기술 스택</h3>
        React.js, TypeScript, CSS, Context-api, Styled-Component, MUI
      </DescBox>
    </ProjectBox>
  );
}

export default ProjectComp;
