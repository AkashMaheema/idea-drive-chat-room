import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import { Outlet } from "react-router-dom";
import ParticelsBg from "../Component/ParticelsBg";


const MainLayout = () => {
  return (
    <div>
      <ParticelsBg/>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
