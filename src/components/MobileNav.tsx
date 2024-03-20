import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import * as ioIcons from "react-icons/io5";
import { useContext, useState, useEffect } from "react";

interface SlideProps {
  open?: boolean;
  mode: string;
}

const OpenIcon = styled.button<SlideProps>`
  position: relative;
  top: 2px;
  font-size: ${({ theme }) => theme.fontL};
  color: ${(props) => props.mode};
  cursor: pointer;
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const Slide = styled.div<SlideProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 20%;
  height: 100vh;
  opacity: 0.3;
  background-color: gray;
  color: ${(props) => props.mode};
  display: flex;
  z-index: 15;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: ${(props) => (props.open ? slideIn : slideOut)} 0.5s forwards;
`;

const CloseIcon = styled.button`
  font-size: ${({ theme }) => theme.fontL};
  position: relative;
  cursor: pointer;
`;

function MobileNav() {
  const [open, setOpen] = useState(false);
  const [render, setRender] = useState(false);
  const { mode } = useContext(ThemeContext);

  useEffect(() => {
    if (open) setRender(true);
  }, [open]);

  const menuClick = () => {
    setOpen(!open);
  };
  const handleAnimation = () => {
    if (!open) setRender(false);
  };
  return (
    <>
      <OpenIcon onClick={menuClick} mode={mode.textColor}>
        {open ? null : <ioIcons.IoMenu />}
      </OpenIcon>
      {render && (
        <Slide
          open={open}
          mode={mode.textColor}
          onAnimationEnd={handleAnimation}
        >
          <CloseIcon onClick={menuClick}>
            <ioIcons.IoCloseSharp />
          </CloseIcon>
          <div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Project</li>
              <li>Resume</li>
            </ul>
          </div>
        </Slide>
      )}
    </>
  );
}

export default MobileNav;
