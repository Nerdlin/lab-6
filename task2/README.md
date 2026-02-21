# Lab 06 - Task 2 (Dynamic Routes + Query Params)

## Student info
- Name: [Your Name]
- Student ID: [Your ID]
- Date: 2026-02-21

## Implemented files
- `src/data.ts` with `Course` interface and mock course data.
- `src/pages/CourseDetail.tsx` using `useParams` + `useLoaderData`.
- `src/pages/Courses.tsx` with `Link` list and sorting via `useSearchParams`.
- `src/main.tsx` with updated routes including `/courses/:id`, `loader`, and `errorElement`.

## URL parameters vs query parameters
- `useParams`:
  Use this when data is part of the route path itself, for example `/courses/:id`.
  It is best for identifying a specific resource.
- `useSearchParams`:
  Use this when data is optional UI state or filtering, for example `/courses?sort=asc`.
  It is best for view settings that do not change which resource is selected.

## Verification checklist
- `/courses` renders links built as `/courses/${id}`.
- Clicking a course opens details without full page reload.
- `/courses/999` shows route error element.
- Sort button toggles URL between `?sort=asc` and `?sort=desc`.
- Course list order changes based on query parameter.

## Run
```bash
npm install
npm run dev
```

## Build check
```bash
npm run build
```
