import { useQuery } from 'react-query';
import type { Params } from 'react-router-dom';
import { useParams, useSearchParams, useLoaderData } from 'react-router-dom';

import { url } from '../../api/constants';
import Score from '../../components/Score';

import GridImages from './GridImages';
import Infos from './Infos';

export async function detailsLoader({
  params,
  request,
}: {
  params: Params<string>;
  request: Request;
}) {
  let response = await fetch(`${url}breed/${params.id}`, {
    signal: request.signal,
  });
  const details = await response.json();
  response = await fetch(`${url}images/${params.id}`);
  const images = await response.json();

  return {
    details,
    images,
  };
}

export default function Details() {
  const params = useParams();
  const { data: details } = useQuery({
    queryFn: async (): Promise<TCat> => {
      const response = await fetch(`${url}breed/${params.id}`);
      const details = await response.json();
      return details;
    },
    queryKey: 'details',
  });
  const { data: images } = useQuery({
    initialData: [],
    queryFn: async (): Promise<string[]> => {
      const response = await fetch(`${url}images/${params.id}`);
      const images = await response.json();

      return images || [];
    },
    queryKey: 'images',
  });
  // const { details, images } = useLoaderData() as {
  //   details: TCat;
  //   images: string[];
  // };

  return (
    <>
      {details && <Infos details={details} />}
      {images && images.length > 0 && <GridImages images={images} />}
    </>
  );
}
