import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/profile">Mon profil</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
