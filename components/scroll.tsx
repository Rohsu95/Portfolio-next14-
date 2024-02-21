"use client";

import Project from "@/page/Project/Project";
import Home from "../page/Home/Home";
import { styled } from "styled-components";
import Total from "@/page/Total/Total";
import Contact from "@/page/Contact/Contact";

const Scrolls = () => {
  return (
    <MiddleBlock>
      <div id="1">
        <Home />
      </div>
      <div id="2">
        <Project />
      </div>
      <div id="3">
        <Total />
      </div>
      <div id="4">
        <Contact />
      </div>
    </MiddleBlock>
  );
};

const MiddleBlock = styled.div``;

export default Scrolls;
