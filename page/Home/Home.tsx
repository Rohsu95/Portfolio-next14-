import React from "react";
import { styled } from "styled-components";
import Image from "next/image";
import MainImg from "../../public/image/main.jpg";
import { FaGithub } from "react-icons/fa";
import { RxNotionLogo } from "react-icons/rx";
import { IoPerson } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";
import theme from "../../styles/Theme";

const Home = () => {
  return (
    <MainContainer>
      <TwinsContainer>
        <ImgContainer>
          <Image
            className="mainImg"
            src={MainImg}
            alt="mainImg"
            width={410}
            height={540}
            priority
          />
        </ImgContainer>

        <ArticleContainer>
          <TitleContainer>Su-Hyeok's PortPolio</TitleContainer>
          <SectionContainer>
            <span className="keyPoint">스스로의 성장을 위해</span> 새로운 지식을
            얻는 것을 좋아하며
            <SectionsContainer>
              <span className="keyPoint">계속 성장 중</span> 인 개발자입니다.
            </SectionsContainer>
          </SectionContainer>
          <Icon>
            <IconContainer>
              <IoPerson size="45" color="black" />

              <Info>
                <span>NAME</span>
                <span>노수혁</span>
              </Info>
            </IconContainer>
            <IconContainer>
              <FaSchool size="45" color="black" />

              <Info>
                <span>BOOT CAMP</span>
                <span>코드 스테이츠 41기</span>
              </Info>
            </IconContainer>
            <IconAContainer
              href="https://github.com/Rohsu95"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub size="45" color="black" />
              <Info>
                <span>Git Hub!</span>
                <span>바로 가기!</span>
              </Info>
            </IconAContainer>
            <IconAContainer
              href="https://universal-finch-bc7.notion.site/6903eccb1e784dee8ff8fecd1c5f3eee"
              target="_blank"
              rel="noreferrer noopener"
            >
              <RxNotionLogo size="45" color="black" />
              <Info>
                <span>Notion!</span>
                <span>바로 가기!</span>
              </Info>
            </IconAContainer>
          </Icon>
        </ArticleContainer>
      </TwinsContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div``;

const TwinsContainer = styled.article`
  height: 100vh;
  display: flex;
  justify-content: space-around;

  @media ${theme.media.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: initial;
    margin-top: 1.5rem;
    height: 110vh;
  }
  @media ${theme.media.phone} {
    height: 90vh;
  }
`;

const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${theme.media.mobile} {
    justify-content: initial; // initial는 초기화
    height: initial;
  }
`;

const TitleContainer = styled.span`
  font-size: 3.75rem;
  background-clip: border-box;
  background: linear-gradient(to right top, #b9eddd, #c9a7eb, #2cd3e1);
  color: transparent;
  -webkit-background-clip: text;
  animation: animate 2s infinite;

  @keyframes animate {
    0% {
      transform: rotateZ(-3deg);
    }
    50% {
      transform: rotateZ(3deg);
    }
    100% {
      transform: rotateZ(-3deg);
    }
  }

  @media ${theme.media.tablet} {
    font-size: 2.5rem;
  }
  @media ${theme.media.mobile} {
    margin-top: 2rem;
  }
  @media ${theme.media.phone} {
    font-size: 2rem;
  }
`;

const SectionContainer = styled.section`
  color: ${theme.colors.font};
  font-size: 1.375rem;
  padding: 5rem 0;

  @media ${theme.media.tablet} {
    padding: 2rem 0;
    font-size: 1rem;
  }
  @media ${theme.media.phone} {
    font-size: 0.8rem;
  }
  .keyPoint {
    background-image: linear-gradient(to right top, #b9eddd, #c9a7eb, #2cd3e1);
    background-position: bottom;
    background-size: 100% 40%;
    background-repeat: no-repeat;
  }
`;

const SectionsContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const ImgContainer = styled.section`
  display: flex;
  align-items: center;

  .mainImg {
    border-radius: 15px;

    @media ${theme.media.tablet} {
      width: 300px;
      height: 400px;
    }
    @media ${theme.media.mobile} {
      width: 300px;
      height: 380px;
    }

    @media ${theme.media.phone} {
      width: 250px;
      height: 300px;
    }
  }

  @media ${theme.media.mobile} {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
`;
const IconContainer = styled.section`
  position: relative;
  text-align: center;
  font-size: 1rem;
  flex: 1;
  transition: 0.2s ease-in-out;
  padding: 1rem 1.75rem;
  display: flex;
  border: 1px solid ${theme.colors.font};
  border-radius: 10px;
  display: flex;
  align-items: center;

  &:hover {
    transform: perspective(1500px) rotateY(30deg);
    box-shadow: 2px 4px 8px rgba(185, 237, 221, 0.6),
      2px 4px 8px rgba(201, 167, 235, 0.6), 2px 4px 8px rgba(4, 206, 224, 0.6);
  }
  svg {
    margin-right: 1rem;

    @media ${theme.media.tablet} {
      width: 30px;
      height: 30px;
    }

    @media ${theme.media.phone} {
      width: 25px;
      height: 25px;
    }
  }

  @media ${theme.media.tablet} {
    padding: 0.5rem 1rem;
  }

  @media ${theme.media.phone} {
    padding: 0.25rem 0.5rem;
  }
`;

const IconAContainer = styled.a`
  position: relative;
  font-weight: bold;
  text-align: center;
  flex: 1;
  transition: 0.2s ease-in-out;
  padding: 1rem 1.75rem;
  display: flex;
  border: 1px solid ${theme.colors.font};
  border-radius: 10px;
  display: flex;
  align-items: center;

  &:hover {
    transform: perspective(1500px) rotateY(30deg);
    box-shadow: 2px 6px 8px rgba(185, 237, 221, 0.6),
      2px 6px 8px rgba(201, 167, 235, 0.6), 2px 6px 8px rgba(4, 206, 224, 0.6);
  }
  text-decoration: none;

  svg {
    margin-right: 1rem;

    @media ${theme.media.tablet} {
      width: 30px;
      height: 30px;
    }

    @media ${theme.media.phone} {
      width: 25px;
      height: 25px;
    }
  }

  @media ${theme.media.tablet} {
    padding: 0.5rem 1rem;
  }

  @media ${theme.media.phone} {
    padding: 0.25rem 0.5rem;
  }
`;

const Icon = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 2rem;
  margin-top: 3rem;

  @media ${theme.media.phone} {
    gap: 1rem;
  }
`;

const Info = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${theme.colors.font};

  span {
    padding: 0.125rem;
    font-weight: 800;
    @media ${theme.media.tablet} {
      font-size: 0.75rem;
    }
    @media ${theme.media.phone} {
      font-size: 0.65rem;
    }
  }
`;
export default Home;
