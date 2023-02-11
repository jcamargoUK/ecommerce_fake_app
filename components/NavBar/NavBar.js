import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/headphones">
            <p>Headphones</p>
          </Link>
        </li>
        <li>
          <Link href="/speakers">
            <p>Speakers</p>
          </Link>
        </li>
        <li>
          <Link href="/earphones">
            <p>Earphones</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;