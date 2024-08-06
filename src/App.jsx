import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import { getAllPosts } from "./data/loaders.js";

import { createPost, updatePost, deletePost } from "./data/actions.js";

import { RootLayout } from "@/layout";
import Loading from "./components/Loading.jsx";

const Posts = lazy(() => import("@/pages/Posts"));
const Post = lazy(() => import("@/pages/Post"));
const UpdateForm = lazy(() => import("@/pages/UpdateForm"));
const CreateForm = lazy(() => import("@/pages/CreateForm"));
const DeleteForm = lazy(() => import("@/pages/DeleteForm"));
const ErrorPage = lazy(() => import("@/pages/ErrorPage"));

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      loader: getAllPosts,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <Posts />
            </Suspense>
          ),
        },
        {
          path: "/posts/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <Post />
            </Suspense>
          ),
        },
        {
          path: "/posts/:id/update",
          element: (
            <Suspense fallback={<Loading />}>
              <UpdateForm />
            </Suspense>
          ),
          action: updatePost,
        },
        {
          path: "/posts/create",
          element: (
            <Suspense fallback={<Loading />}>
              <CreateForm />
            </Suspense>
          ),
          action: createPost,
        },
        {
          path: "/posts/:id/delete",
          element: (
            <Suspense fallback={<Loading />}>
              <DeleteForm />
            </Suspense>
          ),
          action: deletePost,
        },
      ],
      errorElement: (
        <Suspense fallback={<Loading />}>
          <ErrorPage />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}
