import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main className="layout">
      <h1 className="layout__title">Lab 06.1 - Multi-Page App</h1>
      <nav className="layout__nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <section className="layout__content">
        <Outlet />
      </section>
    </main>
  );
}
