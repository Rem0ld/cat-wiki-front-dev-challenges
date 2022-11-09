import { useCallback, useState } from 'react';

import { url } from '../api/constants';
import { debounce } from '../utils/utils';

export default function useSearchInput() {
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

  return {
    handleChange,
    list,
    text,
  };
}
