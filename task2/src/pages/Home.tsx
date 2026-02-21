import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h2>Lab 6.2</h2>
      <p>This project demonstrates dynamic routing, route loaders, and query parameters.</p>
      <p>
        Go to <Link to="/courses">Courses</Link> to test `/courses/:id` and `?sort=asc|desc`.
      </p>
    </div>
  );
}
