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
      <div className="m-auto card-body w-96">
        <h2 className="m-auto text-xl bold">Update</h2>
        <label className="flex items-center gap-2 input input-bordered">
          Title
          <input
            type="text"
            name="title"
            className="grow"
            defaultValue={post.title}
          />
        </label>
        <label className="flex items-center gap-2 input input-bordered">
          Author
          <input
            type="text"
            name="author"
            className="grow"
            defaultValue={post.author}
          />
        </label>
        <label className="flex items-center gap-2 input input-bordered">
          Cover
          <input
            type="url"
            name="cover"
            className="grow"
            defaultValue={post.cover}
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
        <div className="justify-end card-actions">
          <button className="btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button className="bg-green-500 btn hover:bg-green-600">
            Update
          </button>
        </div>
      </div>
    </Form>
  );
}
