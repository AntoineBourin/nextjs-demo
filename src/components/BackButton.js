"use client";

import { useRouter, useParams } from "next/navigation";

const BackButton = () => {
  const params = useParams();
  const router = useRouter();
  return (
    <div>
      <p>{params.id}</p>
      <button onClick={() => router.back()}>Retour</button>
    </div>
  );
};

export default BackButton;
