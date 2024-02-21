import React from "react";
import { styled } from "styled-components";
import theme from "../../styles/Theme";
import { ProjectItem } from "@/components/ProjectItem";
import { useRecoilState } from "recoil";
import { itemsState } from "@/recoil/atoms";

const Project = () => {
  const [item, setItem] = useRecoilState(itemsState);

  return (
    <MainContainer>
      <TitleContainer>
        <MainTitle>Project</MainTitle>
      </TitleContainer>
      <ImgContainer>
        {item.map((el, index) => (
          <ProjectItem
            key={index}
            project={el.project}
            url={el.url}
            id={el.id}
          />
        ))}
      </ImgContainer>
    </MainContainer>
  );
};

const MainContainer = styled.main``;

const TitleContainer = styled.section`
  display: flex;
  justify-content: center;
  height: 27vh;
  align-items: center;
`;
const MainTitle = styled.h1`
  font-size: 6rem;

  background-clip: border-box;
  background: linear-gradient(to right top, #b9eddd, #c9a7eb, #2cd3e1);
  color: transparent;
  -webkit-background-clip: text;

  @media ${theme.media.mobile} {
    font-size: 5rem;
  }
  @media ${theme.media.phone} {
    font-size: 4rem;
  }
`;
const ImgContainer = styled.article`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default Project;
