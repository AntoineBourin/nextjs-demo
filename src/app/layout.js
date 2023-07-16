import "./globals.css";

export const generateMetadata = async () => {
  const response = await fetch("http://localhost:3000/api/categories").then(
    (res) => res.json()
  );
  return {
    title: "Bienvenue sur mon shop",
    description: `Pensez à parcourir nos ${response.number} catégories !`,
  };
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
