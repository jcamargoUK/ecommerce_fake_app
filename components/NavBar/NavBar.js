import Link from "next/link";
import Image from "next/image";
import style from "../../styles/navbar.module.css";
import jsonData from "../../data.json";
import iconCart from "../../public/assets/shared/desktop/icon-cart.svg";
import getData from "../Logic/jsonData";

const NavBar = () => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>audiophile</h1>
      <nav className={style.navbar}>
        <ul className={style.ul}>
          <li>
            <Link className={style.listItem} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={style.listItem} href="/headphones">
              Headphones
            </Link>
          </li>
          <li>
            <Link className={style.listItem} href="/speakers">
              Speakers
            </Link>
          </li>
          <li>
            <Link className={style.listItem} href="/earphones">
              Earphones
            </Link>
          </li>
        </ul>
      </nav>
      <Image src={iconCart} width={20} height={20} alt="cart icon" />
    </div>
  );
};
getData();
export default NavBar;
