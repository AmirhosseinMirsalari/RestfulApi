import style from "./HeaderCom.module.css";
import Navigation from "../Navigation/Navigation";

const HeaderCom = () => {
  return (
    <header className={style.header}>
      <Navigation />
    </header>
  );
};

export default HeaderCom;
