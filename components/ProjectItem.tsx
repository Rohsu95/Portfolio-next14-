import React, { useState } from "react";
import { styled } from "styled-components";
import theme from "../styles/Theme";
import { ProjectItemProps } from "../types/project";
import { Link } from "react-scroll";
import { useRecoilState } from "recoil";
import { idState } from "@/recoil/atoms";

export const ProjectItem: React.FC<ProjectItemProps> = ({
  project,
  url,
  id,
}) => {
  const [item, setItem] = useRecoilState(idState);

  const handleItem = () => {
    setItem(id);
  };

  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [opacityVal, setOpacityVal] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateY = (-1 / 15) * x + 20;
    const rotateX = (4 / 30) * y - 20;

    setPosX(x);
    setPosY(y);

    e.currentTarget.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    setOpacityVal(0);
    e.currentTarget.style.transform =
      "perspective(350px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <SectionContainer onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
      <Link to="3" spy={true} smooth={true} onClick={handleItem}>
        <Img src={url} alt="mainImg" />
      </Link>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
  cursor: pointer;
  &:hover {
    transform: rotateX(4deg) rotateY(-1deg);
  }
`;

const Img = styled.img`
  width: 550px;
  height: 400px;
  border-radius: 15px;
  @media ${theme.media.height} {
    width: 400px;
    height: 300px;
  }
  @media ${theme.media.phone} {
    width: 300px;
    height: 250px;
  }
`;
