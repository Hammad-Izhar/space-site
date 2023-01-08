import { NavLink } from "./NavLink";

function Navbar() {
  const navLinks: string[] = [
    "about",
    "lectures",
    "assignments",
    "labs",
    "hours",
    "staff",
  ];

  return (
    <nav className="sticky top-0 bg-neutral-800">
      <ul className="flex m-0 p-0 w-full h-full items-stretch justify-around">
        {navLinks.map((link, index) => (
          <li className="w-full h-full" key={index}>
            <NavLink title={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
