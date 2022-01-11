import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "../../screen/AboutMe";
import Home from "../../screen/Home";
import routeName from "../../utils/routeName";
import { GoNext } from "../Shared";
import { MainLayOut, ProjectsLayout } from "./MainLayOut";
import ProjectHome from "../../screen/Projects";
import Detail1 from "../../screen/Detail/Detail_1";
import Detail2 from "../../screen/Detail/Detail_2";
import Detail3 from "../../screen/Detail/Detail_3";
import Detail4 from "../../screen/Detail/Detail_4";
import Detail5 from "../../screen/Detail/Detail_5";
import Detail6 from "../../screen/Detail/Detail_6";
import Detail7 from "../../screen/Detail/Detail_7";

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
            <Route path="1" element={<Detail1 />} />
            <Route path="2" element={<Detail2 />} />
            <Route path="3" element={<Detail3 />} />
            <Route path="4" element={<Detail4 />} />
            <Route path="5" element={<Detail5 />} />
            <Route path="6" element={<Detail6 />} />
            <Route path="7" element={<Detail7 />} />
          </Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {pathname === routeName.home ? (
        <GoNext routeName={routeName.me} title={"About Me"} />
      ) : pathname === routeName.me ? (
        <GoNext routeName={routeName.projects} title={"Projects"} />
      ) : null}
    </>
  );
};

export default RightMain;
