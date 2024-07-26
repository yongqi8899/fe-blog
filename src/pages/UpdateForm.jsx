import {
  Form,
  useNavigate,
  useParams,
  useOutletContext
} from "react-router-dom";

export default function UpdateForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const posts = useOutletContext();
  const post = posts.find((post) => post.id === +id);
  return (
    <Form method="POST">
      <div className="card-body w-96 m-auto">
        <h2 className="text-xl m-auto bold">Update</h2>
        <label className="input input-bordered flex items-center gap-2">
          Title
          <input
            type="text"
            name="title"
            className="grow"
            defaultValue={post.title}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Author
          <input
            type="text"
            name="author"
            className="grow"
            defaultValue={post.author}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Content
          <input
            type="text"
            name="content"
            className="grow"
            defaultValue={post.content}
          />
        </label>
        <label className='field'>
          Content
          <textarea
            type="text"
            name="content"
            cols="40"
            rows="10"
            defaultValue={post.content}
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Cover
          <input
            type="url"
            name="cover"
            className="grow"
            defaultValue={post.cover}
          />
        </label>
        <div className="card-actions justify-end">
          <button className="btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button className="btn bg-green-500 hover:bg-green-600">
            Update
          </button>
        </div>
      </div>
    </Form>
  );
}
