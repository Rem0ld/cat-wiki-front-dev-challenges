import { useLoaderData } from 'react-router-dom';

export const homeLoader = async ({ request }: { request: Request }) => {
  return fetch('https://jsonplaceholder.typicode.com/posts/1', {
    signal: request.signal,
  });
};

export default function Home() {
  const data = useLoaderData() as { title: string; body: string };

  return (
    <main className="flex flex-col items-center justify-center gap-4 p-2">
      <h2 className="text-center text-xl font-medium">{data.title}</h2>
      <p className="w-2/4 text-center">{data.body}</p>
    </main>
  );
}
