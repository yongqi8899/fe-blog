export const getAllPosts = async () => {
  const res = await fetch(`http://localhost:8000/posts`);
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
};

// process.env.API_BASE_URL

