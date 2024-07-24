import { NavLink} from "react-router-dom";

export default function Header() {

  return (
    <header className="text-gray-700 align-middle bg-teal-400 navbar bold">
      <div className="flex-1">
        <NavLink to="/home" className="text-xl btn btn-ghost">
          Blog
        </NavLink>
      </div>
    </header>
  );
}
