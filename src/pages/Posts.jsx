import {
  useOutletContext,
  useNavigate,
} from "react-router-dom";

import ImgCard from "@/components/ImgCard";
export default function Posts() {
  const posts = useOutletContext();
  const navigate = useNavigate();
  const handleImageError = (event) => {
    event.target.src = "https://placehold.co/600x400?text=Kein+Bild+vorhanden";
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      {posts &&
        posts.map((post) => (
          <div
            className="my-6 shadow-xl card card-side bg-base-100"
            key={post.id}
          >
            <div className="card-body">
              <ImgCard src={post.cover} alt={post.title}/>  
              <h2 className="card-title">{post.title}</h2>
              <p>{post.author}</p>
              <p>{post.create_at.split("T")[0]}</p>

              <div className="flex gap-2 flex-wrap">
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
