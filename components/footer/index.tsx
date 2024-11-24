import Copyright from "./copyright";
import Links from "./links";
import NewsLetter from "./newsletter";
import Payment from "./payment";
import Socials from "./socials";
import styles from "./styles.module.scss";

interface FooterProps {
  country: {
    name: string;
    flag: string;
  };
}

export default function Footer({ country }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
        <Socials />
        <NewsLetter />
        <Payment />
        <Copyright country={country} />
      </div>
    </footer>
  );
}
