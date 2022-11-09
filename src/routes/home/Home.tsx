import { MdArrowRightAlt } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';

import { url } from '../../api/constants';
import image1 from '../../assets/cat-wiki-master/image 1.png';
import image2 from '../../assets/cat-wiki-master/image 2.png';
import image3 from '../../assets/cat-wiki-master/image 3.png';
import logo2 from '../../assets/logo_cat_second_wiki.svg';
import logo from '../../assets/logo_cat_wiki.svg';
import { Input } from '../../components/Input';

export const homeLoader = async ({ request }: { request: Request }) => {
  return fetch(`${url}initial`, {
    signal: request.signal,
  });
};

export default function Home() {
  const data = useLoaderData() as TCat[];

  return (
    <>
      <div>
        <div className="search-block flex h-[168px] items-center rounded-t-3xl px-7 py-5 md:h-56 md:px-14 lg:h-96 lg:px-16 xl:h-[538px] xl:px-28">
          <div className="flex w-2/4 flex-col gap-3 md:w-1/3 xl:w-2/5 xl:gap-7">
            <div className="relative flex items-baseline justify-start gap-x-5">
              <img
                src={logo}
                alt="logo"
                className="logo-cat-1 relative top-2"
              />
              <img src={logo2} alt="logo" className="logo-cat-2" />
            </div>
            <h2 className="text-xs font-medium text-white lg:text-lg xl:text-2xl">
              Get to know more about your cat breed
            </h2>
            <Input />
          </div>
        </div>

        <div className="most-searched-block mb-16 rounded-b-3xl bg-stone-300 px-7 py-5 md:px-14 lg:px-20">
          <h2 className="font-medium leading-7">Most searched Breeds</h2>
          <div className="h-1 w-14 rounded-3xl bg-amber-900" />
          <div className="flex  justify-between ">
            <p className="my-6 w-3/5 text-lg font-bold lg:my-10 lg:text-3xl lg:font-semibold xl:w-[45%] xl:text-5xl xl:leading-[4rem]">
              66+ Breeds For you to discover
            </p>
            <Link
              to="/most-searched"
              className="flex items-center gap-3 text-sm font-bold uppercase text-stone-500"
            >
              see more
              <MdArrowRightAlt size={24} />
            </Link>
          </div>
          <div className="mb-12 grid grid-cols-2 grid-rows-2 justify-items-center gap-x-3 gap-y-10 md:grid-cols-4 md:grid-rows-1">
            {data?.map((cat: TCat) => {
              return (
                <Link
                  to={`/cat/${cat.id}`}
                  key={cat.name}
                  className="relative flex h-32 w-32 flex-col justify-center gap-3 lg:h-40 lg:w-40 xl:h-56 xl:w-56"
                >
                  <img
                    className="h-full w-full rounded-xl object-cover"
                    src={cat.image.url}
                    alt="cat"
                  />
                  <span className="absolute top-full text-xs font-semibold lg:text-lg">
                    {cat.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="more-info-block flex flex-col lg:flex-row lg:items-center lg:justify-center lg:px-24">
        <div className="basis-2/4">
          <div className="mb-4 h-1 w-14 rounded-3xl bg-amber-900" />

          <h2 className="xl:leading[4rem] text-4xl font-bold leading-10 lg:w-10/12 xl:text-5xl">
            Why should you have a cat?
          </h2>
          <p className="mb-6 mt-10 text-lg lg:w-10/12">
            Having a cat around you can actually trigger the release of calming
            chemical in your body which lower your stress and anxiety levels
          </p>
          <a
            href="#"
            className="flex items-center gap-3 text-xs font-bold uppercase text-stone-500 lg:text-lg"
          >
            read more
            <MdArrowRightAlt size={24} />
          </a>
        </div>
        <div className="image-block mt-16 mb-6 flex justify-center gap-4">
          <div className="flex flex-col items-end gap-4">
            <img src={image2} alt="cat" className="w-44 lg:w-56 xl:w-72" />
            <img src={image3} alt="cat" className="w-32 lg:w-40 xl:w-48" />
          </div>
          <div>
            <img src={image1} alt="cat" className="w-36 lg:w-44 xl:w-64" />
          </div>
        </div>
      </div>
    </>
  );
}
