import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "../../screen/AboutMe";
import Home from "../../screen/Home";
import routeName from "../../routeName";
import { GoNext } from "../Shared";
import { MainLayOut, ProjectsLayout } from "./MainLayOut";
import ProjectHome from "../../screen/Projects";
import Detail_1 from "../../screen/Detail/Detail_1";
import Detail_2 from "../../screen/Detail/Detail_2";
import Detail_3 from "../../screen/Detail/Detail_3";
import Detail_4 from "../../screen/Detail/Detail_4";
import Detail_5 from "../../screen/Detail/Detail_5";
import Detail_6 from "../../screen/Detail/Detail_6";
import Detail_7 from "../../screen/Detail/Detail_7";

/** Need to make 404 page or redirecting to home */
const NoMatch = () => <div>No</div>;

const RightMain = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="me" element={<AboutMe />} />
          <Route path="projects/" element={<ProjectsLayout />}>
            <Route index element={<ProjectHome />} />
            <Route path="1" element={<Detail_1 />} />
            <Route path="2" element={<Detail_2 />} />
            <Route path="3" element={<Detail_3 />} />
            <Route path="4" element={<Detail_4 />} />
            <Route path="5" element={<Detail_5 />} />
            <Route path="6" element={<Detail_6 />} />
            <Route path="7" element={<Detail_7 />} />
          </Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {pathname !== routeName.projects ? (
        pathname === routeName.home ? (
          <GoNext routeName={routeName.me} title={"About Me"} />
        ) : (
          <GoNext routeName={routeName.projects} title={"Projects"} />
        )
      ) : null}
    </>
  );
};

export default RightMain;
