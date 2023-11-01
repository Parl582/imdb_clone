import Allmovies from "@/components/movie-container/Allmovies";
export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="bg-black min-h-[calc(100vh-60px)]">
      <Allmovies searchParams={searchParams} />
    </main>
  );
}
