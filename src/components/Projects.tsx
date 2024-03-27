import styled from "styled-components";
import ProjectComp from "./ProjectComp";

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
    <ProjectContent>
      <Title>프로젝트</Title>
      <ProjectComp />
    </ProjectContent>
  );
}

export default Projects;
