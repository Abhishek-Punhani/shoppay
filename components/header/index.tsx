import Ad from "./Ad";
import Main from "./Main";
import styles from "./styles.module.scss";
import Top from "./Top";
function Header() {
  return (
    <>
      <header className={styles.header}>
        <Ad />
        <Top />
        <Main />
      </header>
    </>
  );
}

export default Header;
