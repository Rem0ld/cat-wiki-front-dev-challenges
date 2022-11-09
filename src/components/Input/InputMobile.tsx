import { useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

import useSearchInput from '../../hooks/useSearchInput';

import ListMobile from './ListMobile';

export default function InputMobile() {
  const { text, handleChange, list } = useSearchInput();
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        className="search-input flex w-3/5 items-center rounded-3xl bg-white md:w-full lg:h-12 lg:w-full xl:h-16"
      >
        <input
          type="text"
          disabled
          placeholder="Search"
          className="w-3/4 rounded-l-3xl border-0 pr-0 focus:border-transparent focus:shadow-none focus:outline-none focus:ring-transparent md:w-full"
        />
        <span className="icon-search lg:w-11">
          <MdOutlineSearch color="black" />
        </span>
      </div>
      {visible ? (
        <ListMobile
          list={list}
          handleClick={handleClick}
          handleChange={handleChange}
          text={text}
        />
      ) : (
        ''
      )}
    </>
  );
}
