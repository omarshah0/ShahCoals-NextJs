import Link from "next/link";
import { useRouter } from "next/router";
// Import of CSS Files;

function Header() {
  const router = useRouter();
  return (
    <header>
      <Link href="/">
        <a>
          <div className="brand-logo"></div>
        </a>
      </Link>
      <ul className="navbar">
        <li className={router.pathname == "/" ? "nav-item active" : "nav-item"}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={router.pathname == "/about" ? "nav-item active" : "nav-item"}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className={router.pathname == "/products" ? "nav-item active" : "nav-item"}>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </li>
        <li className={router.pathname == "/contact" ? "nav-item active" : "nav-item"}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
