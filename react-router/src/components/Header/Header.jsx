import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">React Router v6</h1>
        <ul className="flex flex-wrap">
          <li className="ml-4">
            <Link
              to="/"
              className="flex items-center text-blue-500 hover:underline"
            >
              Home
            </Link>
          </li>
          <li className="ml-4">
            <Link
              to="/github"
              className="flex items-center text-blue-500 hover:underline"
            >
              Github
            </Link>
          </li>
          <li className="ml-4">
            <Link
              to="/about"
              className="flex items-center text-blue-500 hover:underline"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
