"use client";

import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const handleLogoutClick = async () => {
    fetch("/api/auth", {
      method: "DELETE",
    }).then(() => {
      router.refresh();
    });
  };

  return <button onClick={handleLogoutClick}>Déconnexion</button>;
};

export default Logout;
