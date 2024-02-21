import theme from "../../styles/Theme";
import { styled } from "styled-components";
import Slider from "react-slick";
import { StyleProps } from "../../types/project";

export const MainContainer = styled.main``;

export const TitleContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 22vh;
  align-items: center;
  margin-bottom: 1rem;
  @media ${theme.media.phone} {
    height: 15vh;
  }
`;
export const MainTitle = styled.h1`
  font-size: 4rem;
  background-clip: border-box;
  background: linear-gradient(to right top, #b9eddd, #c9a7eb, #2cd3e1);
  color: transparent;
  -webkit-background-clip: text;

  @media ${theme.media.mobile} {
    font-size: 4rem;
  }
  @media ${theme.media.phone} {
    font-size: 3rem;
  }
`;
export const ArticleContainer = styled.article`
  display: flex;
  justify-content: space-around;

  @media ${theme.media.laptop} {
    flex-direction: column;
    display: flex;
    align-items: center;
  }
`;
// 이미지 전체 크기
export const Img = styled.img`
  height: 400px;

  @media ${theme.media.height} {
    height: 35vh;
    height: 400px;
  }
  @media ${theme.media.phone} {
    height: 300px;
    width: 300px;
  }
`;

// 실제 이미지 움직이는 틀
export const SliderStyle = styled(Slider)`
  width: 500px;
  height: 430px;

  .slick-arrow {
    &::before {
      color: ${theme.colors.font};
    }
  }
  .slick-prev {
    left: 1% !important;
    z-index: 1000;
  }
  .slick-next {
    right: 3% !important;
    z-index: 0;

    @media ${theme.media.height} {
      right: 1% !important;
    }
  }
  .slick-prev::before {
    font-size: 30px;

    @media ${theme.media.height} {
      font-size: 20px;
    }
  }
  .slick-next::before {
    font-size: 30px;

    @media ${theme.media.height} {
      font-size: 20px;
    }
  }
  .slick-dots {
    li button:before {
      font-size: 18px;
      color: ${theme.colors.font};

      @media ${theme.media.phone} {
        font-size: 13px;
      }
    }
  }
  @media ${theme.media.laptop} {
    width: 63.78vw;
  }
  @media ${theme.media.height} {
    width: 400px;
    height: 450px;
    display: flex;
    align-items: center;
  }
  @media ${theme.media.phone} {
    width: 300px;
    height: 380px;
  }
`;
export const ContentContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 35vw;

  @media ${theme.media.laptop} {
    margin-top: 4rem;
    width: 63.78vw;
  }
`;
export const ContentRole = styled.section<StyleProps>`
  padding: 1rem 0;

  font-size: ${(props) => props.font || "1.125rem"};
  color: ${(props) => props.color || ""};

  @media ${theme.media.mobile} {
    font-size: 1.375rem;
  }
  @media ${theme.media.height} {
    font-size: 1.25rem;
  }
  @media ${theme.media.mobile} {
    font-size: 1rem;
  }

  .keyPoint {
    background-clip: border-box;
    background: linear-gradient(to right top, #7bb8cc, #b56fcf, #1eaac7);
    color: transparent;
    -webkit-background-clip: text;
  }
`;
export const ProjectIntro = styled.span`
  background-image: linear-gradient(to right top, #b9eddd, #c9a7eb, #2cd3e1);
  background-position: bottom;
  background-size: 100% 50%;
  background-repeat: no-repeat;
  color: ${theme.colors.font};
  font-size: 1.375rem;
  margin-top: 5rem;
`;

export const Content = styled.section`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${theme.colors.font};
  margin-bottom: 1.5rem;
`;
export const IconContainer = styled.div`
  padding: 2rem;

  svg {
    &:hover {
      color: white !important;
    }
    @media ${theme.media.phone} {
      width: 30px;
      height: 30px;
    }
  }
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const GifContainer = styled.article``;
