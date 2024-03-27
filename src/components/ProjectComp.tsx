import styled from "styled-components";
import image from "../assets/react-query.gif";

const ProjectBox = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 1px 3px;
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
          </div>
        </Link>
      </div>
      <DescBox>
        <h3>프로젝트 소개</h3>안녕하세요
      </DescBox>
    </ProjectBox>
  );
}

export default ProjectComp;
