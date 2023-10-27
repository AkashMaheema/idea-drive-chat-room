import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainLayout}>
            <Route index Component={Home} />
            <Route path="About-Us" Component={About} />
            <Route path="Contact-Us" Component={Contact} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
