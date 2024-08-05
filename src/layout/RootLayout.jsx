import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

export default function RootLayout() {
  const posts = useLoaderData();

  useEffect(() => {
    const handleEvent = (e) => {
      if (e.detail.status === "success") {
        toast.success(e.details.message);
      } else {
        toast.error(e.details.message);
      }
    };
    document.addEventListener("myToaster", handleEvent);
    return () => document.removeEventListener("myToaster", handleEvent);
  }, []);

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
