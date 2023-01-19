import FooterCom from "./FooterCom/FooterCom";
import HeaderCom from "./HeaderCom/HeaderCom";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderCom />
      {children}
      <FooterCom />
    </>
  );
};

export default Layout;
