export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 101,
    title: "React Fundamentals",
    instructor: "Alice Johnson",
    description: "Components, props, state, and JSX basics for modern React apps.",
  },
  {
    id: 102,
    title: "TypeScript for Frontend",
    instructor: "Michael Brown",
    description: "Type-safe React development with interfaces, generics, and strict mode.",
  },
  {
    id: 103,
    title: "Web Accessibility",
    instructor: "Sofia Martinez",
    description: "Practical techniques for semantic HTML, keyboard access, and ARIA.",
  },
  {
    id: 104,
    title: "State Management Patterns",
    instructor: "Daniel Kim",
    description: "Patterns for sharing state across components with clean architecture.",
  },
];
