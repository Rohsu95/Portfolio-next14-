import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PortItem } from "../../../components/GifItem";
import * as s from "../style";

const Port = () => {
  return (
    <s.MainContainer>
      <s.TitleContainer>
        <s.MainTitle>PortFolio</s.MainTitle>
      </s.TitleContainer>
      <s.ArticleContainer>
        <PortItem />
        <s.ContentContainer>
          <s.Content>
            <s.ProjectIntro>프로젝트 소개</s.ProjectIntro>
            <s.ContentRole>
              프론트엔드 취업을 위한 프로젝트입니다.
              <span className="keyPoint">
                {" "}
                새로운 기술에 대한 호기심을 충족시키고, 실제 업무에서 적용
                가능한 기술 스택에 대한 경험을 쌓기 위해 react 프로젝트를
                next.js 14버전으로 전환
              </span>
              하였으며, 포트폴리오 페이지에서
              <span className="keyPoint">
                {" "}
                링크의 불편함을 느껴, 한 페이지에서 정보를 확인할 수 있는
              </span>{" "}
              포트폴리오 웹을 만들었습니다.
            </s.ContentRole>
          </s.Content>
          <s.Content>
            <s.ProjectIntro>구현 기능</s.ProjectIntro>
            <s.ContentRole>
              <strong>about 페이지</strong> : 저의 프로필 이미지를 볼 수 있으며
              <span className="keyPoint"> GitHub와 notion을 연결</span>
              하였습니다.
            </s.ContentRole>
            <s.ContentRole>
              <strong> Project 페이지</strong> :
              <span className="keyPoint"> 각각의 Project</span>를 확인할 수
              있으며{" "}
              <span className="keyPoint">
                Slick을 사용하여 슬라이드 형식의 이미지
              </span>
              를 확인할 수 있습니다.
            </s.ContentRole>
            <s.ContentRole>
              <strong> Contact 페이지</strong> : Email을 보내기 위해
              <span className="keyPoint"> EmailJs 라이브러리</span> 사용하여
              저의 <span className="keyPoint"> Gmail과 연동</span>하였습니다.
            </s.ContentRole>
          </s.Content>
          <s.Content>
            <s.ProjectIntro>Skill</s.ProjectIntro>
            <s.ContentRole>
              TypeScript, Next.js, Styled-Components
            </s.ContentRole>
          </s.Content>
        </s.ContentContainer>
      </s.ArticleContainer>
    </s.MainContainer>
  );
};
export default Port;
