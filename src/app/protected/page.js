import Logout from "@/components/logout/Logout";

const ProtectedPage = () => {
  return (
    <div>
      <h1>Page protégée</h1>
      <Logout />
    </div>
  );
};

export default ProtectedPage;
