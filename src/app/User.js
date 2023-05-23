import React from "react";

const User = async () => {
  const response = await fetch("https://random-data-api.com/api/v2/users", {
    cache: "no-store",
  });
  const user = await response.json();
  return (
    <div>
      <ul>
        <li>Prénom : {user.first_name}</li>
        <li>Nom : {user.last_name}</li>
        <li>Email : {user.email}</li>
        <li>Date de naissance : {user.date_of_birth}</li>
      </ul>
    </div>
  );
};

export default User;
