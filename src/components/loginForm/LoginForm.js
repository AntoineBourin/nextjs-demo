"use client";

import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
      }),
    }).then(() => {
      router.push("/dashboard");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        autoComplete="off"
      />
      <input type="password" name="password" placeholder="Password" />
      <input type="submit" value="Connexion" />
    </form>
  );
};

export default LoginForm;
