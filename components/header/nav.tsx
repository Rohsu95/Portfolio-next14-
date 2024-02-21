import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import theme from "../../styles/Theme";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsToggleOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <>
      <NavContainer $isToggleOpen={isToggleOpen} ref={ref}>
        <UlContainer id="menu">
          <LiContainer>
            <LinkTo to="1" spy={true} smooth={true}>
              <NavSPan>About</NavSPan>
            </LinkTo>
          </LiContainer>
          <LiContainer>
            <LinkTo to="2" spy={true} smooth={true}>
              <NavSPan> Project</NavSPan>
            </LinkTo>
          </LiContainer>
          <LiContainer>
            <LinkTo to="4" spy={true} smooth={true}>
              <NavSPan>Contact</NavSPan>
            </LinkTo>
          </LiContainer>
        </UlContainer>
      </NavContainer>
      <Icon>
        <GiHamburgerMenu onClick={handleToggleOpen} />
      </Icon>
    </>
  );
};
const Icon = styled.i`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media ${theme.media.mobile} {
    display: inline-block;
    position: absolute;
    margin-top: 1rem;
    right: 32px;
  }
`;
const NavContainer = styled.nav<{ $isToggleOpen: boolean }>`
  @media ${theme.media.mobile} {
    #menu {
      flex-direction: column;
      display: ${(props) => (props.$isToggleOpen ? "" : "none")};
    }
  }
`;
const UlContainer = styled.ul`
  display: flex;
  margin-right: 2rem;
`;
const LiContainer = styled.li`
  list-style: none;
  font-size: 2rem;
  font-weight: 900;
  padding: 0 2rem;

  &:hover {
    color: ${theme.colors.font_hover};
  }

  @media ${theme.media.mobile} {
    padding: 0.5rem 0;
  }
`;
const LinkTo = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.font};
`;

const NavSPan = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    color: ${theme.colors.font_hover};
  }
`;

export default Nav;
