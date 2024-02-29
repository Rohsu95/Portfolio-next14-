import React from "react";
import * as s from "../page/Item/style";
import { MainIcon, PortIcon, SideIcon } from "./Icon";

const settings = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const MainItem = () => {
  const Main = [
    {
      id: 11,
      url: "/image/main/main1.gif",
      alt: "메인 페이지",
    },
    {
      id: 12,
      url: "/image/main/main2.gif",
      alt: "회원 가입",
    },
    {
      id: 13,
      url: "/image/main/main3.gif",
      alt: "로그인",
    },
    {
      id: 14,
      url: "/image/main/main4.gif",
      alt: "커뮤니티",
    },
    {
      id: 15,
      url: "/image/main/main5.gif",
      alt: "세부 조회 페이지",
    },
    {
      id: 16,
      url: "/image/main/main6.gif",
      alt: "게시글 작성",
    },
    {
      id: 17,
      url: "/image/main/main7.gif",
      alt: "게시글 수정",
    },
    {
      id: 18,
      url: "/image/main/main8.gif",
      alt: "마이 페이지",
    },
    {
      id: 19,
      url: "/image/main/main9.gif",
      alt: "메인 페이지 수정",
    },
    {
      id: 20,
      url: "/image/main/main10.gif",
      alt: "등산 지도",
    },
  ];
  return (
    <s.GifContainer>
      <s.SliderStyle {...settings}>
        {Main.map((item) => (
          <s.Img key={item.id} src={item.url} alt={item.alt} />
        ))}
      </s.SliderStyle>
      <MainIcon />
    </s.GifContainer>
  );
};

export const SideItem = () => {
  const Side = [
    {
      id: 21,
      url: "/image/side/side1.gif",
      alt: "회원 가입, 로그인, 프로필 사진",
    },
    {
      id: 22,
      url: "/image/side/side2.gif",
      alt: "게시글 작성",
    },
    {
      id: 23,
      url: "/image/side/side3.gif",
      alt: "게시글 수정",
    },
    {
      id: 24,
      url: "/image/side/side4.gif",
      alt: "댓글 작성, 삭제",
    },
    {
      id: 25,
      url: "/image/side/side5.gif",
      alt: "유저 정보 수정",
    },
    {
      id: 26,
      url: "/image/side/side6.gif",
      alt: "게시글 삭제, 로그 아웃",
    },
  ];

  return (
    <s.GifContainer>
      <s.SliderStyle {...settings}>
        {Side.map((item) => (
          <s.Img key={item.id} src={item.url} alt={item.alt} />
        ))}
      </s.SliderStyle>
      <SideIcon />
    </s.GifContainer>
  );
};

export const PortItem = () => {
  const Port = [
    {
      id: 31,
      url: "/image/port/port1.gif",
      alt: "About 페이지",
    },
    {
      id: 32,
      url: "/image/port/port2.gif",
      alt: "Project 페이지",
    },
    {
      id: 34,
      url: "/image/port/port3.gif",
      alt: "contact 페이지",
    },
  ];

  return (
    <s.GifContainer>
      <s.SliderStyle {...settings}>
        {Port.map((item) => (
          <s.Img key={item.id} src={item.url} alt={item.alt} />
        ))}
      </s.SliderStyle>
      <PortIcon />
    </s.GifContainer>
  );
};
