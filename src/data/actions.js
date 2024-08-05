import { redirect } from "react-router-dom";

export const createPost = async ({ request, res }) => {
  const formData = Object.fromEntries(await request.formData());
  await fetch(`${import.meta.env.VITE_BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  console.log(res);
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
  if(!res.ok) throw Error("update Post is not successful")
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
  if (!res.ok) {
    const event = new CustomEvent('myToaster', { detail: { status: 'error', msg: 'Deletion failed!' } });
    document.dispatchEvent(event);
  } else {
    const event = new CustomEvent('myToaster', { detail: { status: 'success', msg: 'Deletion worked!' } });
    document.dispatchEvent(event);
  }
  return redirect("/");
};
