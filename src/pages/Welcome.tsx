import StarRating from "../StarRating";
import { routes } from "../utils/routes";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <h1>Welcome</h1>
      <div className="flex justify-start w-full h-full flex-col mt-10">
        {routes.map((e, i) => {
          return (
            <div key={i}>
              &nbsp; -{" "}
              <Link to={e.path as string} className="hover:underline">
                {e.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Welcome;
