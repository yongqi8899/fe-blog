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
            placeholder="Please write your title here"
            defaultValue={post.title}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Author
          <input
            type="text"
            name="author"
            className="grow"
            placeholder="Please write author here"
            defaultValue={post.author}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Content
          <input
            type="text"
            name="content"
            className="grow"
            placeholder="Please write content here"
            defaultValue={post.content}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Cover
          <input
            type="url"
            name="cover"
            className="grow"
            placeholder="Please write cover url here"
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
