import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";
import { Layout } from "./components/Layout";
import { courses } from "./data";
import type { Course } from "./data";
import { CourseDetail } from "./pages/CourseDetail";
import { CourseError } from "./pages/CourseError";
import { Courses } from "./pages/Courses";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import "./style.css";

function courseLoader({ params }: LoaderFunctionArgs): { course: Course } {
  const id = Number(params.id);
  const course = courses.find((item) => item.id === id);

  if (Number.isNaN(id) || !course) {
    throw new Response("Course not found", { status: 404 });
  }

  return { course };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "courses/:id",
        element: <CourseDetail />,
        loader: courseLoader,
        errorElement: <CourseError />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
