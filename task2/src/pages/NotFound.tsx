import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <h2>404 - Page not found</h2>
      <p>The route does not exist.</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}
