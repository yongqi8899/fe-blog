import { Form, useNavigate } from "react-router-dom";

export default function CreateForm() {
  const navigate = useNavigate();
  return (
    <Form method="POST" action="/">
      <div className="card-body w-96 m-auto">
        <h2 className="text-xl m-auto bold">Create</h2>
        <label className="input input-bordered flex items-center gap-2">
          Title
          <input
            type="text"
            name="title"
            className="grow"
            placeholder="Please write your title here"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Author
          <input
            type="text"
            name="author"
            className="grow"
            placeholder="Please write author here"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Content
          <input
            type="text"
            name="content"
            className="grow"
            placeholder="Please write content here"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Cover
          <input
            type="url"
            name="cover"
            className="grow"
            placeholder="Please write cover url here"
          />
        </label>
        <div className="card-actions justify-end">
          <button className="btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button className="btn bg-green-500 hover:bg-green-600">
            Create
          </button>
        </div>
      </div>
    </Form>
  );
}
