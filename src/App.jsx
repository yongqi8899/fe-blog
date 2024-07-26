import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getAllPosts } from "./data/loaders.js";

import { createPost, updatePost, deletePost } from "./data/actions.js";

import { RootLayout } from "@/layout";
import {
  ErrorPage,
  Posts,
  Post,
  CreateForm,
  DeleteForm,
  UpdateForm,
} from "@/pages";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      loader: getAllPosts,
      children: [
        {
          index: true,
          element: <Posts />,
        },
        {
          path: "/posts/:id",
          element: <Post />,
        },
        {
          path: "/posts/:id/update",
          element: <UpdateForm />,
          action: updatePost,
          // loader: getOnePost,
        },
        {
          path: "/posts/create",
          element: <CreateForm />,
          action: createPost,
        },
        {
          path: "/posts/:id/delete",
          element: <DeleteForm />,
          action: deletePost,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
