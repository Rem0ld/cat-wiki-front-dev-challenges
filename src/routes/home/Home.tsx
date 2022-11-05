import { useLoaderData } from 'react-router-dom';
import logo from '../../assets/logo_cat_wiki.png';
import { MdOutlineSearch } from 'react-icons/md';

type TCat = {
  name: string;
  image: {
    id: string;
    url: string;
  };
};

export const homeLoader = async ({ request }: { request: Request }) => {
  return fetch('http://localhost:3000/api/cat/initial', {
    signal: request.signal,
  });
};

export default function Home() {
  const data = useLoaderData() as TCat[];
  console.log(data);

  return (
    <main className=" px-4 md:px-24">
      <div className="search-block rounded-t-3xl px-7 py-5">
        <div className="flex w-2/4 flex-col gap-3 ">
          <img src={logo} alt="logo" width={46} />
          <h2 className="text-xs font-medium text-white">
            Get to know more about your cat breed
          </h2>
          <div className="search-input flex w-3/5 items-center rounded-3xl bg-white">
            <input
              type="text"
              placeholder="Search"
              className=" w-3/4 rounded-l-3xl border-0 pr-0 focus:border-transparent focus:shadow-none focus:outline-none focus:ring-transparent"
            />
            <MdOutlineSearch color="black" />
          </div>
        </div>
      </div>

      <div className="most-searched-block rounded-b-3xl bg-stone-300 px-7 py-5">
        <h2 className="font-medium leading-7">Most searched Breeds</h2>
        <div className="h-1 w-10 rounded-3xl bg-amber-900" />
        <p className="my-6 w-3/5 text-lg font-bold">
          66+ Breeds For you to discover
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-4">
          {data?.map((cat: TCat) => {
            return (
              <div className="flex flex-col  justify-center gap-3">
                <img
                  className="h-44 w-44 rounded-xl object-cover"
                  src={cat.image.url}
                />
                {cat.name}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
