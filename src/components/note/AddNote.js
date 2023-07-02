"use client";

import { useRouter } from "next/navigation";

const AddNote = ({ token }) => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get("note");

    fetch("/api/user/notes", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        authorization: token,
      },
    }).then(() => {
      router.refresh();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="note"
        placeholder="Votre note"
        autoComplete="off"
      />
      <input type="submit" value="Ajouter" />
    </form>
  );
};

export default AddNote;
