import styled, { keyframes } from "styled-components";
import * as IoIcons from "react-icons/io";

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const ButtonBox = styled.button<{ show: boolean }>`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontXL};
  position: fixed;
  right: 0;
  bottom: 5px;
  margin: ${({ theme }) => theme.marginL};
  display: ${({ show }) => (show ? "block" : "none")};
  animation: ${fadeIn} 0.8s;
`;

interface ScrollUpProps {
  show: boolean;
}

function ScrollUp({ show }: ScrollUpProps) {
  const handleTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <ButtonBox show={show} onClick={handleTop}>
      <IoIcons.IoIosArrowDropupCircle />
    </ButtonBox>
  );
}

export default ScrollUp;
