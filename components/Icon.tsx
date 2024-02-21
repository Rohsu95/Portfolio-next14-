import React from "react";
import * as s from "../page/Item/style";

import { FaGithub } from "react-icons/fa";
import { RxNotionLogo } from "react-icons/rx";
import { SlControlPlay } from "react-icons/sl";

export const SideIcon = () => {
  return (
    <s.Icon>
      <s.IconContainer>
        <a
          href="https://github.com/rohsuhyoek/Side-Project"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub size="45" color="black" />
        </a>
      </s.IconContainer>
      <s.IconContainer>
        <a
          href="https://universal-finch-bc7.notion.site/Real-World-248480c6ec99403d8af906888a429e9b"
          target="_blank"
          rel="noreferrer noopener"
        >
          <RxNotionLogo size="45" color="black" />
        </a>
      </s.IconContainer>
      <s.IconContainer>
        <a
          href="https://side-project-lilac.vercel.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SlControlPlay size="45" color="black" />
        </a>
      </s.IconContainer>
    </s.Icon>
  );
};
export const PortIcon = () => {
  return (
    <s.Icon>
      <s.IconContainer>
        <a
          href="https://github.com/Rohsu95/Portfolio"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub size="45" color="black" />
        </a>
      </s.IconContainer>
      <s.IconContainer>
        <a
          href="https://universal-finch-bc7.notion.site/PortPolio-2138ea9ca4b24155bc315f8816639322"
          target="_blank"
          rel="noreferrer noopener"
        >
          <RxNotionLogo size="45" color="black" />
        </a>
      </s.IconContainer>
    </s.Icon>
  );
};
export const MainIcon = () => {
  return (
    <s.Icon>
      <s.IconContainer>
        <a
          href="https://github.com/codestates-seb/seb41_main_029"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub size="45" color="black" />
        </a>
      </s.IconContainer>
      <s.IconContainer>
        <a
          href="https://universal-finch-bc7.notion.site/ef51561c08cf46bcb5634b35267777c0"
          target="_blank"
          rel="noreferrer noopener"
        >
          <RxNotionLogo size="45" color="black" />
        </a>
      </s.IconContainer>
      <s.IconContainer>
        <a
          href="http://pre41-deploy-test.s3-website.ap-northeast-2.amazonaws.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SlControlPlay size="45" color="black" />
        </a>
      </s.IconContainer>
    </s.Icon>
  );
};
