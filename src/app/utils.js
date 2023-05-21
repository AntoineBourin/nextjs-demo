export const getUser = async () => {
  const response = await fetch("http://localhost:3000/api/user", {
    cache: "no-store",
  });
  const { user } = await response.json();

  return user;
};

export const getUserCourses = async () => {
  const response = await fetch("http://localhost:3000/api/user/courses", {
    cache: "no-store",
  });
  const { courses } = await response.json();

  return courses;
};
