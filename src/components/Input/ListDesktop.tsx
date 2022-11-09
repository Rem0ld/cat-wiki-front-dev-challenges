import { Link } from 'react-router-dom';

export default function ListDesktop({ list }: { list: TCat[] }) {
  return (
    <div className="absolute top-full z-50 w-full translate-y-2 overflow-hidden rounded-2xl bg-white transition-all">
      <ul className="my-1 mr-2 max-h-60 overflow-scroll py-4 pl-1 pr-2">
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
  );
}
