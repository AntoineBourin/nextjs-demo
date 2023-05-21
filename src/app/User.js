import React from "react";
import { getUser, getUserCourses } from "./utils";

const User = async () => {
  const user = await getUser();
  return <p>Username : {user.name}</p>;
};

export default User;
