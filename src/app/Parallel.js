import React from "react";
import { getUser, getUserCourses } from "./utils";

const Parallel = async () => {
  const userPromise = getUser();
  const coursesPromise = getUserCourses();

  const [user, courses] = await Promise.all([userPromise, coursesPromise]);
  return (
    <div>
      <p>Username : {user.name}</p>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Parallel;
