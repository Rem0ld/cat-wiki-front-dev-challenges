import { MdOutlineSearch } from 'react-icons/md';

import useSearchInput from '../../hooks/useSearchInput';

import ListDesktop from './ListDesktop';

export default function InputDesktop() {
  const { text, list, handleChange } = useSearchInput();

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
      {list.length ? <ListDesktop list={list} /> : ''}
    </div>
  );
}
