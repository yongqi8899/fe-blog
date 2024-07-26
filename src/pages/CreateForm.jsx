import { Form } from "react-router-dom";

export default function CreateForm() {
  return (
    <Form method="POST">
      <div className="card bg-base-100 w-96 shadow-xl">
        <label className="input input-bordered flex items-center gap-2">
          Title
          <input
            type="text"
            className="grow"
            placeholder="Please write your title here"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Title
          <input
            type="text"
            className="grow"
            placeholder="Please write your title here"
          />
        </label>
      </div>
      <button>Create</button>
    </Form>
  );
}
