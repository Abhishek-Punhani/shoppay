import Link from "next/link";
import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import { BsSuitHeart } from "react-icons/bs";
import { useState } from "react";
import UserMenu from "./userMenu";
function Top() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className={styles.top}>
        <div className={styles.top__container}>
          <div></div>
          <ul className={styles.top__list}>
            <li className={styles.li}>
              <img src={"/images/india.png"} alt="" />
              <span>India / ₹</span>
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
              {loggedIn ? (
                <li className={styles.li}>
                  <div className={styles.flex}>
                    <RiAccountPinCircleLine />
                    <span>Abhishek</span>
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
              {showMenu && <UserMenu loggedIn={loggedIn} />}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Top;
