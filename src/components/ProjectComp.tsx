import styled from "styled-components";
import image from "../assets/react-query.gif";
import { InforamtionProps } from "../constants/project";

const ProjectBox = styled.article`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 ${({ theme }) => theme.marginXL};
  font-family: "SejonghospitalLight";
  margin-bottom: ${({ theme }) => theme.marginXXL};

  @media ${({ theme }) => theme.deskTop} {
    flex-direction: row;
  }
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
  padding: ${(props) => props.theme.paddingM};

  h3 {
    font-family: "DNFBitBitv2";
    line-height: 4;
    display: inline;
    box-shadow: inset 0 -10px 0 #275efe;
  }
  width: 300px;

  @media ${(props) => props.theme.tabletMedium} {
    width: 400px;
  }
  @media ${(props) => props.theme.deskTop} {
    width: 500px;
    padding-top: 0;
  }
`;

function ProjectComp({ title, link, content, repo, skills }: InforamtionProps) {
  return (
    <ProjectBox>
      <div>
        <Image>
          <img src={image} />
        </Image>
        <Link>
          <Title>{title}</Title>
          <div>
            <SS>배포 링크</SS>
            <br />
            <br />
            <a href="https://github.com/handongsu/portfolio">{link}</a>
            <br />
            <br />
            <SS>레포지토리 주소</SS>
            <br />
            <br />
            <a href="https://github.com/handongsu/portfolio">{repo}</a>
          </div>
        </Link>
      </div>
      <DescBox>
        <h3>프로젝트 소개</h3>
        <br />
        {content}
        <br />
        <h3>기술 스택</h3>
        <br />
        {skills}
      </DescBox>
    </ProjectBox>
  );
}

export default ProjectComp;
