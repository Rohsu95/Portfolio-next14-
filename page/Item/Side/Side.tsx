import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SideItem } from "../../../components/GifItem";
import * as s from "../style";

const Side = () => {
  return (
    <div>
      <s.TitleContainer>
        <s.MainTitle>Real-World</s.MainTitle>
      </s.TitleContainer>
      <s.ArticleContainer>
        <SideItem />
        <s.ContentContainer>
          <s.Content>
            <s.ProjectIntro>프로젝트 소개</s.ProjectIntro>
            <s.ContentRole>
              부트캠프에서 배운 내용들을 정리하기 위해 수료 후 만든
              <strong> 1인 프로젝트</strong>입니다.
              <span className="keyPoint"> FireBase</span>에서
              <span className="keyPoint">
                {" "}
                백엔드를 이해하기 위해 Node.js 서버로 개편
              </span>
              하였으며,
              <span className="keyPoint">
                {" "}
                Lazy suspense 및 LightHouse 도구
              </span>
              를 활용하여
              <span className="keyPoint">
                {" "}
                웹사이트 성능 및 로딩 속도 최적화
              </span>
              를 진행하였고 <span className="keyPoint">React-Query</span>를
              활용하여
              <span className="keyPoint">
                {" "}
                복잡한 데이터 로직을 단순화하고 성능 향상
              </span>
              을 하였습니다.
            </s.ContentRole>
          </s.Content>
          <s.Content>
            <s.ProjectIntro>구현 기능</s.ProjectIntro>
            <s.ContentRole>
              <strong>회원 가입, 로그인 페이지</strong> : Node.js로{" "}
              <span className="keyPoint">사용자 인증 기능과 토큰</span>이
              있으며, 회원 가입 시{" "}
              <span className="keyPoint">
                프로필 이미지 선택 기능, 유효성 검사 후 로그인 기능
              </span>
              이 있습니다.
            </s.ContentRole>
            <s.ContentRole>
              <strong>게시글 작성 페이지</strong> :{" "}
              <span className="keyPoint">
                게시글 작성 (제목, 내용, 태그) 기능
              </span>
              을 구현하였습니다.
            </s.ContentRole>
            <s.ContentRole>
              <strong> 커뮤니티 메인 페이지 </strong>:{" "}
              <span className="keyPoint">
                내가 작성한 글만 보기 기능, 내가 작성한 글 삭제 기능
              </span>
              을 구현하였습니다.
            </s.ContentRole>
            <s.ContentRole>
              <strong>특정 게시글 조회 페이지 </strong>:{" "}
              <span className="keyPoint">
                선택한 게시글 조회, 댓글 작성, 삭제 기능
              </span>
              을 구현하였습니다.
            </s.ContentRole>
            <s.ContentRole>
              <strong> 게시글 수정 페이지 </strong>:{" "}
              <span className="keyPoint">작성한 게시글 수정 기능</span>을
              구현하였습니다.
            </s.ContentRole>
            <s.ContentRole>
              <strong> 마이 페이지</strong> :{" "}
              <span className="keyPoint">
                내가 작성한 글 보기 기능, 로그 아웃 기능
              </span>
              을 구현하였습니다.
            </s.ContentRole>
            <s.ContentRole>
              <strong> 개인 정보 수정 페이지</strong> :{" "}
              <span className="keyPoint">
                닉네임, 이메일, 패스워드 수정 기능
              </span>
              을 구현하였습니다.
            </s.ContentRole>
          </s.Content>
          <s.Content>
            <s.ProjectIntro>Skill</s.ProjectIntro>
            <s.ContentRole>
              TypeScript, React, Node.js, MongoDB, Styled-Components
            </s.ContentRole>
          </s.Content>
        </s.ContentContainer>
      </s.ArticleContainer>
    </div>
  );
};
export default Side;
