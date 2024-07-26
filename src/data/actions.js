import { redirect } from "react-router-dom";

export const createPost = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  await fetch(`${import.meta.env.VITE_BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });
 return redirect("/");
};

export const updatePost = async ({ params, request }) => {
  const id = params.id;
  const formData = Object.fromEntries(await request.formData());
  await fetch(`${import.meta.env.VITE_BASE_URL}/posts/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return redirect(`/posts/${id}`);
};

export const deletePost = async ({ params }) => {
  const id = params.id;
  await fetch(`${import.meta.env.VITE_BASE_URL}/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
};

export const handlePostAction = async ({ params, request }) => {
  const id = params.id;
  const data = Object.fromEntries(await request.formData());
  let response;

  switch (request.method) {
    case "PUT":
      response = await updatePost({ params, request });
      break;
    case "DELETE":
      response = await deletePost({ params });
      break;
    default:
      throw new Error(`Unsupported method: ${request.method}`);
  }

  if (!response.ok) {
    throw new Error("Failed to perform the action");
  }

  return response.json();
};
