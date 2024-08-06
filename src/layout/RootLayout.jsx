import { Outlet } from "react-router-dom";

import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useLoaderData } from "react-router-dom";
import {useToaster} from '../utils/index.js'

export default function RootLayout() {
  const posts = useLoaderData();
  useToaster()
  // useEffect(() => {
  //   const handleEvent = (e) => {
  //     let msg = e.detail.msg
  //     if (e.detail.status === "success") {
  //       toast.success(msg);
  //     } else {
  //       toast.error(msg);
  //     }
  //   };
  //   document.addEventListener("myToaster", handleEvent);
  //   return () => document.removeEventListener("myToaster", handleEvent);
  // }, []);

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
