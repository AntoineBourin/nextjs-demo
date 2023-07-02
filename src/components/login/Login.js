"use client";

const Login = () => {
  const handleLoginClick = () => {
    fetch("/api/auth", {
      method: "POST",
    });
  };

  return <button onClick={handleLoginClick}>Connexion</button>;
};

export default Login;
