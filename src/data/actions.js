export const createPost = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  const res = await fetch(`http://localhost:8000/posts`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
};

export const updatePost = async ({ params, request }) => {
  const id = params.id;
  const formData = Object.fromEntries(await request.formData());
  const res = await fetch(`http://localhost:8000/${id}`, {
    method: request.method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
};

export const deletePost = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`http://localhost:8000/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
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
