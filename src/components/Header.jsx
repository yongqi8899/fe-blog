import { NavLink } from "react-router-dom";

export default function Header() {
  const handleCreate = () => {};

  return (
    <header className="sticky top-0 z-50 text-gray-700 align-middle bg-white navbar bold flex justify-between">
      <div className="flex">
        <NavLink to="/" className="text-xl btn btn-ghost">
          Blog
        </NavLink>
      </div>
      <div>
        <NavLink to="/posts/create" className="text-xl btn btn-ghost">
          +
        </NavLink>
      </div>
    </header>
  );
}
