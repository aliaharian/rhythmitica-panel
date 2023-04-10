import { Outlet } from "react-router-dom";
import Footer from "../organisms/mainLayout/Footer";
import Header from "../organisms/mainLayout/Header";
import Sidebar from "../organisms/mainLayout/Sidebar";
import styles from "../../assets/scss/templates/mainLayout.module.scss";


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
