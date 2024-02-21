"use client";

import { styled } from "styled-components";
import theme from "../../styles/Theme";
import Nav from "./nav";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <NameContainer to="1" spy={true} smooth={true}>
          Su-Hyeok
        </NameContainer>
      </Container>
      <Nav />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(3px);

  @media ${theme.media.mobile} {
    align-content: center;
    flex-direction: column;
  }
`;

const Container = styled.article`
  padding: 0 3rem;
  @media ${theme.media.mobile} {
    margin-top: 1rem;
  }
`;

const NameContainer = styled(Link)`
  cursor: pointer;
  flex-wrap: wrap;
  white-space: nowrap;
  color: ${theme.colors.font};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 1000;
  &:hover {
    color: ${theme.colors.font_hover};
  }

  @media ${theme.media.laptop} {
    font-size: 1.5rem;
  }
`;

const Icon = styled.i`
  display: none;
  font-size: 1.5rem;

  @media ${theme.media.mobile} {
    display: inline-block;
    position: absolute;
    margin-top: 1rem;
    right: 32px;
  }
`;

export default Header;
