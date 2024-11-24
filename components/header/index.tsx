import Ad from "./Ad";
import Main from "./Main";
import styles from "./styles.module.scss";
import Top from "./Top";
interface HeaderProps {
  country: {
    name: string;
    flag: string;
  };
}

function Header({ country }: HeaderProps) {
  return (
    <>
      <header className={styles.header}>
        <Ad />
        <Top country={country} />
        <Main />
      </header>
    </>
  );
}

export default Header;
