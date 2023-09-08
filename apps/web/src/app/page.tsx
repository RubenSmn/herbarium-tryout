export default async function Home() {
  const response = await fetch("http://localhost:4000");
  const data = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {data.message}
    </main>
  );
}
