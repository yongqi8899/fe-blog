import { Form, useNavigation } from "react-router-dom";

export default function CreateForm() {
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  return (
    <Form method="POST">
      <div className="card-body w-96 m-auto">
        <fieldset disabled={busy}>
          <h2 className="text-xl m-auto bold">Create</h2>
          <label className="input input-bordered flex items-center gap-2">
            Title
            <input
              type="text"
              name="title"
              className="grow"
              placeholder="Please write your title here"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Author
            <input
              type="text"
              name="author"
              className="grow"
              placeholder="Please write author here"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Cover
            <input
              type="url"
              name="cover"
              className="grow"
              placeholder="Please write cover url here"
              required
            />
          </label>
          <label className="field">
            Content
            <textarea
              type="text"
              name="content"
              cols="40"
              rows="10"
              placeholder="Please write content here"
              required
            />
          </label>
        </fieldset>
        <div className="card-actions justify-end">
          <button className="btn" onClick={() => navigate(-1)}>
            Cancel
          </button>

          <button
            type="submit"
            className="btn bg-green-500 hover:bg-green-600"
            disabled={busy}
          >
            {busy ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
    </Form>
  );
}
