"use client";

import { styled } from "styled-components";
import Total from "@/page/Total/Total";
import { lazy } from "react";

const Home = lazy(() => import("../page/Home/Home"));
const Project = lazy(() => import("../page/Project/Project"));
const Contact = lazy(() => import("../page/Contact/Contact"));

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
