import AddNote from "@/components/note/AddNote";
import { cookies } from "next/headers";

const DashboardPage = async () => {
  const token = cookies().get("token")?.value;
  const response = await fetch("http://localhost:3000/api/user/notes", {
    headers: {
      authorization: token,
    },
  });
  const notes = await response.json();
  return (
    <div>
      <h1>Dashboard</h1>
      <AddNote token={token} />
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
