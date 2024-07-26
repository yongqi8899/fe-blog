import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <>
      <div className=" bg-white flex flex-col m-10 gap-10">
        <h1 className="text-3xl font-bold text-red-400">Error Page</h1>
        <p className="">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <button
        className="flex btn w-30 bg-red-300 hover:bg-red-400 m-auto"
        onClick={() => navigate("/")}
      >
        Go back
      </button>
    </>
  );
};
export default ErrorPage;
