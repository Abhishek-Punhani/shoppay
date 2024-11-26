import Link from "next/link";
import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import { BsSuitHeart } from "react-icons/bs";
import { useState } from "react";
import UserMenu from "./userMenu";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
interface TopProps {
  country: {
    name: string;
    flag: string;
  };
}

function Top({ country }: TopProps) {
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className={styles.top}>
        <div className={styles.top__container}>
          <div></div>
          <ul className={styles.top__list}>
            <li className={styles.li}>
              <img src={country.flag} alt="" />
              <span>{country.name} / ₹</span>
            </li>
            <li className={styles.li}>
              <MdSecurity />
              <span>Buyer Protection</span>
            </li>
            <li className={styles.li}>
              <span>Customer Service</span>
            </li>
            <li className={styles.li}>
              <span>Help</span>
            </li>
            <li className={styles.li}>
              <BsSuitHeart />
              <Link href="/profile/whishlist">
                <span>Whishlist</span>
              </Link>
            </li>
            <li
              className={styles.li}
              onMouseOver={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              {session ? (
                <li className={styles.li}>
                  <div className={styles.flex}>
                    <img src={session.user?.image as string} alt="" />
                    <span>{session.user?.name}</span>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              ) : (
                <li className={styles.li}>
                  <div className={styles.flex}>
                    <RiAccountPinCircleLine />
                    <span>Account</span>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              )}
              {showMenu && <UserMenu session={session as Session} />}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Top;
