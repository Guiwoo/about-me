import React, {useContext} from "react";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import AboutMe from "../../screen/AboutMe";
import Home from "../../screen/Home";
import routeName from "../../utils/routeName";
import {GoNext} from "../Shared";
import {MainLayOut, ProjectsLayout} from "./MainLayOut";
import ProjectHome from "../../screen/Projects";
import Detail1 from "../../screen/Detail/Detail_1";
import Detail2 from "../../screen/Detail/Detail_2";
import Detail3 from "../../screen/Detail/Detail_3";
import Detail4 from "../../screen/Detail/Detail_4";
import Detail5 from "../../screen/Detail/Detail_5";
import Detail6 from "../../screen/Detail/Detail_6";
import Detail7 from "../../screen/Detail/Detail_7";
import {LangContext} from "../../utils/toggleLang";
import RenewPage from "../../screen/Close";

const NoMatch = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    return navigate(routeName.home);
  }, [navigate]);
  return null;
};

const RightMain = () => {
  const {pathname} = useLocation();
  const {isEn} = useContext(LangContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="me" element={<AboutMe />} />
          <Route path="projects/" element={<ProjectsLayout />}>
            <Route index element={<ProjectHome />} />
            <Route path="1" element={<Detail1 isEn={isEn} />} />
            <Route path="2" element={<Detail2 isEn={isEn} />} />
            <Route path="3" element={<Detail3 isEn={isEn} />} />
            <Route path="4" element={<Detail4 isEn={isEn} />} />
            <Route path="5" element={<Detail5 isEn={isEn} />} />
            <Route path="6" element={<Detail6 isEn={isEn} />} />
            <Route path="7" element={<Detail7 isEn={isEn} />} />
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
