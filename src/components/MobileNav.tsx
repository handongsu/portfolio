import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import * as ioIcons from "react-icons/io5";
import { useContext, useState, useEffect } from "react";

interface NavProps {
  open?: boolean;
  mode: string;
}

const Icon = styled.button`
  font-size: ${({ theme }) => theme.fontXL};
  cursor: pointer;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.3);
  }
`;

const OpenIcon = styled(Icon)<NavProps>`
  visibility: ${(props) => (props.open ? "hidden" : "visible")};
`;

const puffIn = keyframes`
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1);
    filter: blur(0px);
  }
`;

const puffOut = keyframes`
    0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(2px);
  }
`;

const Slide = styled.div<NavProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: gray;
  display: flex;
  z-index: 15;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: ${(props) => (props.open ? puffIn : puffOut)} 0.7s forwards;
`;

const Li = styled.li`
  padding: ${({ theme }) => theme.paddingS};
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.3);
  }

  & + & {
    margin-top: ${({ theme }) => theme.marginL};
  }
`;
const Menu = styled.a`
  font-size: ${({ theme }) => theme.fontXL};
  font-weight: 700;
`;
function MobileNav() {
  const [open, setOpen] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(false);
  const { mode } = useContext(ThemeContext);

  const menuDetails = [
    { text: "Home", path: "/" },
    { text: "About", path: "#about" },
    { text: "Project", path: "#project" },
    {
      text: "Resume",
      path: "https://drive.google.com/file/d/1WaqGg6qzTDnMslrwzfw8iR8GZ--_PRUN/view?usp=sharing",
      isResume: true,
    },
  ];

  useEffect(() => {
    if (open) {
      setRender(true);
    }
  }, [open]);

  const menuClick = () => {
    setOpen(!open);
  };
  const closeClick = () => {
    setOpen(false);
  };
  const handleAnimation = () => {
    if (!open) setRender(false);
  };
  return (
    <>
      <OpenIcon onClick={menuClick} mode={mode.textColor}>
        {open ? (
          <div style={{ width: "40px", height: "24px" }}></div>
        ) : (
          <ioIcons.IoMenu />
        )}
      </OpenIcon>
      {render && (
        <Slide
          open={open}
          mode={mode.textColor}
          onAnimationEnd={handleAnimation}
        >
          <Icon onClick={menuClick}>
            <ioIcons.IoCloseSharp />
          </Icon>
          <div>
            <ul>
              {menuDetails.map(({ text, path, isResume }) => (
                <Li onClick={closeClick}>
                  <Menu
                    href={path}
                    aria-label={text}
                    target={isResume ? "_blank" : undefined}
                    rel={isResume ? "noreferrer noopener" : undefined}
                  >
                    {text}
                  </Menu>
                </Li>
              ))}
            </ul>
          </div>
        </Slide>
      )}
    </>
  );
}

export default MobileNav;
