import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>error 404</h2>
      <h3>Not found page !</h3>
      <Link to="/">go to home</Link>
    </div>
  );
};

export default NotFound;
