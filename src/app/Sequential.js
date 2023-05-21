import React from "react";
import { getUser, getUserCourses } from "./utils";

const Sequential = async () => {
  const user = await getUser();
  const courses = await getUserCourses();

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

export default Sequential;
