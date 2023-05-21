import React from "react";
import { getUser, getUserCourses } from "./utils";

const Courses = async () => {
  const courses = await getUserCourses();
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>{course.name}</li>
      ))}
    </ul>
  );
};

export default Courses;
