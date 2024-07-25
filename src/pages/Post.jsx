import { useOutletContext, useParams, useNavigate} from "react-router-dom";
import { useState } from "react";
import UpdateForm from "@/components/UpdateForm.jsx";
import DeleteForm from "@/components/DeleteForm.jsx";

export default function Post() {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  const navigate = useNavigate()
  const { id } = useParams();
  const posts = useOutletContext();
  const post = posts.find((post) => post.id === +id);

  const handleUpdate = () => {
    setShowUpdateForm(true);
  };
  const handleDelete = () => {
    setShowDeleteForm(true);
  };
  const date = new Date(post.create_at);
  console.log(date);
  return (
    <div>
      {post && (
        <>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={post.cover}
                alt={post.title}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
                <div className="flex justify-between">
                  <p>{post.author}</p>
                  <p>{post.create_at.split('T')[0]}</p>
                </div>
                <p className="py-6">{post.content}</p>
                <div className="flex justify-end gap-6 w-full">
                  <button className="btn" onClick={handleUpdate}>
                    update
                  </button>
                  <button className="btn" onClick={handleDelete}>
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* <UpdateForm method='PUT' heading="heading" btnTxt="update" /> */}
      {showUpdateForm && <UpdateForm />}
      {showDeleteForm && <DeleteForm />}
    </div>
  );
}
