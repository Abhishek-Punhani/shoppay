import Link from "next/link";
import styles from "./styles.module.scss";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
interface UserMenuProps {
  session: Session;
}
function UserMenu({ session }: UserMenuProps) {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Shoppay !</h4>
      {session ? (
        <div className={styles.flex}>
          <img
            src={session.user?.image as string}
            alt=""
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>{session.user?.name}</h3>
            <span onClick={() => signOut()}>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined} onClick={() => signIn()}>
            Login
          </button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Message Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/whishlist">Whishlist</Link>
        </li>
      </ul>
    </div>
  );
}
export default UserMenu;
