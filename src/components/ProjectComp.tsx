import styled from "styled-components";

export interface InformationProps {
  title: string;
  link: string;
  image: string;
  content: string;
  repo: string;
  skills: string[];
}

const ProjectBox = styled.article`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin: 0 ${({ theme }) => theme.marginXL};
  font-family: "SejonghospitalLight";
  margin-bottom: ${({ theme }) => theme.marginXXL};

  @media ${({ theme }) => theme.deskTop} {
    flex-direction: row;
  }
`;

const Image = styled.div`
  margin-bottom: ${(props) => props.theme.marginL};
  height: 300px;
  /* overflow: hidden; */

  img {
    margin: 0 auto;
    margin-top: 90px;
    display: block;
    height: 300px;
    overflow: hidden;
    border-radius: 5px;
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
    padding-top: 70px;
  }
`;

function ProjectComp({
  title,
  image,
  link,
  content,
  repo,
  skills,
}: InformationProps) {
  return (
    <ProjectBox>
      <div>
        <Image>
          <img src={`${image}`} alt={title} />
        </Image>
        <Link>
          <Title>{title}</Title>
          <div>
            <SS>배포 링크</SS>
            <br />
            <br />
            <a href={link} target="_blank">
              {link}
            </a>
            <br />
            <br />
            <SS>레포지토리 주소</SS>
            <br />
            <br />
            <a href={repo} target="_blank">
              {repo}
            </a>
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
        <br />
        <h3></h3>
      </DescBox>
    </ProjectBox>
  );
}

export default ProjectComp;
