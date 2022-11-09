import { useCallback, useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { url } from '../api/constants';

const debounce = (callback: Function, delay: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
};

export function Input() {
  const time = 300;
  const [text, setText] = useState('');
  const [list, setList] = useState<TCat[]>([]);

  const apiCall = async (value: string) => {
    if (!value.length) return;
    const response = await fetch(`${url}search/${value}`);
    const result = await response.json();

    setList(result);
  };

  const debounceApiCall = useCallback(
    debounce((text: string) => apiCall(text), time),
    []
  );

  const handleChange = (e: any) => {
    if (!e.target.value) {
      setList([]);
    }
    setText(e.target.value);
    debounceApiCall(e.target.value);
  };

  return (
    <div className="relative">
      <div className="search-input flex w-3/5 items-center rounded-3xl bg-white pr-3 md:w-full lg:h-12 lg:w-full xl:h-16">
        <input
          type="text"
          onChange={handleChange}
          value={text}
          placeholder="Search"
          className="w-3/4 rounded-l-3xl border-0 pr-0 focus:border-transparent focus:shadow-none focus:outline-none focus:ring-transparent md:w-full"
        />
        <span className="icon-search lg:w-11">
          <MdOutlineSearch color="black" />
        </span>
      </div>
      {list.length ? (
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
      ) : (
        ''
      )}
    </div>
  );
}
