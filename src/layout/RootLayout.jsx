import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useLoaderData } from "react-router-dom";

export default function RootLayout() {
  const posts = useLoaderData()
  return (
    <div>
      <Header />
      <ToastContainer position="top-right" autoClose={1500} theme="light" />
      <main>
        <Outlet context={posts} />
      </main>
    </div>
  );
}
