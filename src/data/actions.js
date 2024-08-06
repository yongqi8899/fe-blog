import { redirect } from "react-router-dom";
import { showToast } from "../utils/index";

export const createPost = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  showToast(res, "create failed!", "create success!");
  return redirect("/");
};

export const updatePost = async ({ params, request }) => {
  const id = params.id;
  const formData = Object.fromEntries(await request.formData());
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/posts/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  showToast(res, "update failed!", "update success!");
  return redirect(`/posts/${id}`);
};

export const deletePost = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  showToast(res, "Delete failed!", "Delete success!");
  return redirect("/");
};
