import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage"
import AboutPage from "../../pages/AboutPage";
import CoursesPage from "../../pages/CoursesPage";
const RoutesProvider = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />} />
      <Route path={"/about"} element={<AboutPage />} />
      <Route path={"/courses"} element={<CoursesPage />} />
    </Routes>
  );
};

export default RoutesProvider;
