import { IoClose } from 'react-icons/io5';
import { MdOutlineSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function ListMobile({
  list,
  handleChange,
  handleClick,
  text,
}: {
  list: TCat[];
  handleChange: (e: any) => void;
  handleClick: () => void;
  text: string;
}) {
  return (
    <div className="absolute left-0 top-0 z-50 flex w-full translate-y-2 flex-col items-end gap-y-7 overflow-hidden border border-gray-100 bg-white py-2 px-5 transition-all">
      <button
        onClick={handleClick}
        className="grid h-7 w-7 place-items-center rounded-sm bg-gray-200"
      >
        <IoClose size={24} />
      </button>
      <div className="search-input flex w-full items-center rounded-3xl border bg-white pr-3">
        <input
          type="text"
          onChange={handleChange}
          value={text}
          placeholder="Search"
          className="w-full rounded-3xl border-0 pr-0 focus:border-transparent focus:shadow-none focus:outline-none focus:ring-transparent md:w-full"
        />
        <span className="icon-search">
          <MdOutlineSearch color="black" />
        </span>
      </div>
      <div className="w-full rounded-2xl">
        <ul className="my-1 mr-2 max-h-60 overflow-scroll rounded-2xl">
          {list.map((el: TCat) => {
            return (
              <Link
                className="block w-full cursor-pointer rounded-lg p-4 text-left hover:bg-gray-100"
                key={el.id}
                to={`/cat/${el.id}`}
              >
                {el.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
