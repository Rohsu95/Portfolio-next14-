import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainItem } from "../../../components/GifItem";
import * as s from "../style";

const Main = () => {
  return (
    <div>
      <s.TitleContainer>
        <s.MainTitle>등산하조</s.MainTitle>
      </s.TitleContainer>
      <s.ArticleContainer>
        <MainItem />
        <s.ContentContainer>
          <s.Content>
            <s.ProjectIntro>프로젝트 소개</s.ProjectIntro>
            <s.ContentRole>
              부트캠프에서 진행한 메인 프로젝트입니다. 등산 좋아하는 사람들을
              위한 <span className="keyPoint">등산 정보 공유 커뮤니티</span>
              이며, 디자인부터 직접 프론트 엔드 팀원들과 만들었으며
              <span className="keyPoint">
                {" "}
                백엔드와 협업을 하여 처음 만든 프로젝트
              </span>
              입니다.
            </s.ContentRole>
          </s.Content>
          <s.Content>
            <s.ProjectIntro>구현 기능</s.ProjectIntro>
            <s.ContentRole>
              <strong> 게시글 작성 페이지 </strong>:
              <span className="keyPoint">툴바 사용</span>을 위한
              <span className="keyPoint"> CK Editor 라이브러리</span>를 사용하여
              글 작성 편집기를 만들었고,
              <span className="keyPoint"> 카테고리 설정</span>을 위한
              <span className="keyPoint"> M ui 라이브러리</span>를 사용하여
              카테고리 창을 만들었습니다.
            </s.ContentRole>
            <s.ContentRole>
              <strong>마이 페이지</strong> :
              <span className="keyPoint"> 내가 작성한 글, 댓글, 북마크</span>를
              볼 수 있으며 <span className="keyPoint">회원 탈퇴 기능, </span>
              <span className="keyPoint"> 나의 포인트 및 등급, </span>
              <span className="keyPoint">
                포인트 획득 방법 및 멤버 등급 안내 모달
              </span>
              을 구현하였습니다.
            </s.ContentRole>
          </s.Content>
          <s.Content>
            <s.ProjectIntro>Skill</s.ProjectIntro>
            <s.ContentRole>
              JavaScript, React, Axios, Styled-Components
            </s.ContentRole>
          </s.Content>
        </s.ContentContainer>
      </s.ArticleContainer>
    </div>
  );
};
export default Main;
