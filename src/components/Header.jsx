import { NavLink} from "react-router-dom";
import CreateForm from "@/components/CreateForm.jsx";
import {useState} from 'react'

export default function Header() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const handleCreate = () => {
    setShowCreateForm(true)
  };

  return (
    <header className="sticky top-0 z-50 text-gray-700 align-middle bg-white navbar bold">
      <div className="flex-1">
        <NavLink to="/" className="text-xl btn btn-ghost">
          Blog
        </NavLink>
        <button className="btn" onClick={handleCreate}>
        +
      </button>
      </div>
      {showCreateForm && <CreateForm />}
    </header>
  );
}
