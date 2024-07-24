import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootLayout } from "@/layout";
import { ErrorPage, Home, Detail} from "@/pages";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "home/:id",
          element: <Detail />,
        }
      ],
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
