import { useOutletContext, useNavigate } from "react-router-dom";

import CardImg from "@/components/CardImg";
export default function Posts() {
  const posts = useOutletContext();
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
      {posts &&
        posts.map((post) => (
          <div className="card glass w-1fr" key={post.id}>
            <CardImg src={post.cover} alt={post.title} />
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <div className="flex justify-between mb-2">
                <p>{post.author}</p>
                <p>{post.create_at.split("T")[0]}</p>
              </div>
              <div className="justify-end card-actions">
                <button
                  className="btn"
                  onClick={() => navigate(`/posts/${post.id}/update`)}
                >
                  update
                </button>
                <button
                  className="btn"
                  onClick={() => navigate(`/posts/${post.id}/delete`)}
                >
                  delete
                </button>
                <button
                  className="btn"
                  onClick={() => navigate(`/posts/${post.id}`)}
                >
                  detail
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
