import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const posts = useOutletContext();
  const post = posts.find((post) => post.id === +id);

  const handleDelete = () =>{
    navigate(`/posts/${id}/delete`);
  }
  const handleUpdate = () =>{
    navigate(`/posts/${id}/update`);
  }

  const handleImageError = (event) => {
    event.target.src = "https://placehold.co/600x400?text=Kein+Bild+vorhanden";
  };

  return (
    <div>
      {post && (
        <>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={post.cover}
                alt={post.title}
                onError={handleImageError}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
                <div className="flex justify-between">
                  <p>{post.author}</p>
                  <p>{post.create_at.split("T")[0]}</p>
                </div>
                <p className="py-6">{post.content}</p>
                <div className="flex justify-end gap-6 w-full">
                  <button className="btn" onClick={handleUpdate}>update</button>
                  <button className="btn" onClick={handleDelete}>delete</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* <UpdateForm method='PUT' heading="heading" btnTxt="update" /> */}
      {/* {showUpdateForm && <UpdateForm />}
      {showDeleteForm && <DeleteForm />} */}
    </div>
  );
}
