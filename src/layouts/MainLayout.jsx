import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import Chat from "../Component/Chat"
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Chat/>
    </div>
  );
};

export default MainLayout;
