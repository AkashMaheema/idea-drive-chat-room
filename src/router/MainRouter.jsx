import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainLayout}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
