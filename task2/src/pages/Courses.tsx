import { Link, useSearchParams } from "react-router-dom";
import { courses } from "../data";

export function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort") === "desc" ? "desc" : "asc";

  const sorted = [...courses].sort((a, b) =>
    sortOrder === "desc"
      ? b.title.localeCompare(a.title)
      : a.title.localeCompare(b.title),
  );

  const toggleSort = () => {
    setSearchParams({
      sort: sortOrder === "asc" ? "desc" : "asc",
    });
  };

  return (
    <div>
      <h2>Courses</h2>
      <div className="courses__toolbar">
        <button className="courses__button" onClick={toggleSort} type="button">
          Sort: {sortOrder.toUpperCase()}
        </button>
      </div>
      <ul>
        {sorted.map((course) => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
