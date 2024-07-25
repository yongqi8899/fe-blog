import { Form } from "react-router-dom";
import { updatePost } from "@/data/actions.js";

export default function DeleteForm() {
  return (
    <Form method="DELETE">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Delete Post</h2>
          <p>Are you sure you want delete it?</p>
          <div className="card-actions justify-end">
            <button className="btn">Delete</button>
          </div>
        </div>
      </div>
    </Form>
  );
}
