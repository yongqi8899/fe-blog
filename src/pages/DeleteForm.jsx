import { Form } from "react-router-dom";

export default function DeleteForm() {
  return (
    <Form method="DELETE" action="/">
      <div className="card w-96 bg-base-100 shadow-xl m-auto">
        <div className="card-body">
          <h2 className="card-title">Delete Post</h2>
          <p>Are you sure you want delete it?</p>
          <div className="card-actions justify-end">
            {/* <button className="btn" onClick={() => navigate(-1)}>Cancel</button> */}
            {/* <button className="btn" type="submit" onClick={() => navigate("/")}>Delete</button> */}
            <button className="btn" type="submit">Delete</button>
          </div>
        </div>
      </div>
    </Form>
  );
}
