import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-violet-200 rounded-lg shadow-lg mb-9">
      <nav>
        <ul className="flex items-center justify-center gap-5  ">
          <li className="py-1 px-3 rounded-lg">
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? "text-violet-700" : null
              }
            >
              Contact list
            </NavLink>
          </li>
          <li className="py-1 px-3 rounded-lg">
            <NavLink
              to="/add"
              className={(navData) =>
                navData.isActive ? "text-violet-700" : null
              }
            >
              Add Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
