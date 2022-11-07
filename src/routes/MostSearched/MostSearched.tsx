import { useLoaderData } from 'react-router-dom';

import { url } from '../../api/constants';

export const mostSearchLoader = async ({ request }: { request: Request }) => {
  return fetch(`${url}most-searched`, {
    signal: request.signal,
  });
};

export default function MostSearched() {
  const data = useLoaderData() as TCat[];

  return (
    <>
      <h2 className="py-10 text-3xl font-bold">Top 10 most searched breed</h2>
      <div className="mb-10 flex flex-col gap-10">
        {data?.length > 0 ? (
          data.map((cat: TCat, i) => {
            return (
              <div key={cat.name} className="flex gap-10">
                <img
                  src={cat.image.url}
                  className="h-[170px] w-[170px] min-w-[170px] rounded-xl object-cover"
                  alt={cat.name}
                />
                <div>
                  <h3 className="text-3xl font-semibold">
                    {i + 1}. {cat.name}
                  </h3>
                  <p className="my-5">{cat.description}</p>
                </div>
              </div>
            );
          })
        ) : (
          <h2>Not enough data yet!</h2>
        )}
      </div>
    </>
  );
}
