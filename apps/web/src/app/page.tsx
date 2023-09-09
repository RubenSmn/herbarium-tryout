export default async function Home() {
  const response = await fetch("http://localhost:4000");
  const data = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p>{data.message}</p>
      <p>
        Also worth mentioning, this monorepo has{" "}
        <a href="https://turbo.build/">TurboPack</a>
      </p>
      <p>Currently learning about monorepo&apos;s</p>
    </main>
  );
}
