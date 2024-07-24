import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <ToastContainer position="top-right" autoClose={1500} theme="light" />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
