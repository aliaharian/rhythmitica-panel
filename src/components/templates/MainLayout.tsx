import { Outlet } from "react-router-dom";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Sidebar from "../organisms/Sidebar";
import styles from "../../assets/scss/templates/mainLayout.module.scss";

interface MainLayoutProps {
  children?: React.ReactNode;
}
const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Sidebar />
      <div className={styles.contentContainer}>
        <Header />
        <div className={styles.content}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default MainLayout;
