import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {getAllPosts} from './data/loaders.js'

import {handlePostAction, createPost } from './data/actions.js'

import { RootLayout } from "@/layout";
import { ErrorPage, Posts, Post } from "@/pages";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      loader:getAllPosts,
      children: [
        {
          index: true,
          element: <Posts />,
          action:createPost 
        },
        {
          path: "/posts/:id",
          element: <Post />,
          action: handlePostAction,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
