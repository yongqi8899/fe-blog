import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import ImgCard from "@/components/ImgCard";

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

  return (
    <div>
      {post && (
        <>
          <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">
              <ImgCard src={post.cover} alt={post.title} title={post.title} />  
              <div>
                <h1 className="mb-6 text-5xl font-bold">{post.title}</h1>
                <div className="flex justify-between">
                  <p>{post.author}</p>
                  <p>{post.create_at.split("T")[0]}</p>
                </div>
                <p className="py-6">{post.content}</p>
                <div className="flex justify-end w-full gap-6">
                  <button className="btn" onClick={handleUpdate}>update</button>
                  <button className="btn" onClick={handleDelete}>delete</button>
                  <button className="btn" onClick={()=>navigate("/")}>back</button>
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
