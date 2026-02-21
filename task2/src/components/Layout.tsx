import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main className="layout">
      <h1 className="layout__title">Week 6 Lab 06: React Router & Navigation</h1>
      <nav className="layout__nav">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
      </nav>
      <section className="layout__content">
        <Outlet />
      </section>
    </main>
  );
}
