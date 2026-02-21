import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export function CourseError() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h2>Error {error.status}</h2>
        <p>{error.statusText || "Course not found."}</p>
        <p>
          Try a valid route like <code>/courses/101</code>.
        </p>
        <Link to="/courses">Back to courses</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Unexpected error</h2>
      <Link to="/courses">Back to courses</Link>
    </div>
  );
}
