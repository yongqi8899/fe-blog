import { useOutletContext, Link } from "react-router-dom";

export default function Posts() {
  const posts = useOutletContext();
  const handleImageError = (event) => {
    event.target.src = "https://placehold.co/600x400?text=Kein+Bild+vorhanden";
  };
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-6">
      {posts &&
        posts.map((post) => (
          <div
            className="my-6 shadow-xl card card-side bg-base-100"
            key={post.id}
          >
            <div className="card-body">
              <div className="relative w-full overflow-hidden h-80">
                {
                  <img
                    src={post.cover}
                    alt={post.title}
                    onError={handleImageError}
                    className="absolute inset-0 object-cover w-full h-full"
                  ></img>
                }
              </div>
              <h2 className="card-title">{post.title}</h2>
              <p>{post.author}</p>
              <p>{post.create_at.split("T")[0]}</p>

              <Link key={post.id} to={`/posts/${post.id}`} className="btn">
                detail
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
