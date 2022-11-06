import { useLoaderData } from 'react-router-dom';

import Score from '../../components/Score';

export default function Details() {
  const data = useLoaderData() as TCat;

  return (
    <main className="px-24">
      <div className="flex gap-28 px-10">
        <img
          src={data.image.url}
          alt="cat"
          className="h-96 w-96 rounded-3xl object-cover"
        />
        <div className="flex flex-col gap-y-8">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <p>Temperament: {data.temperament}</p>
          <p>Origin: {data.origin}</p>
          <p>Life span: {data.life_span}</p>
          <div className="flex w-10/12 items-center justify-between ">
            Adaptability: <Score score={data.adaptability} />
          </div>
          <div className="flex w-10/12 items-center justify-between gap-2">
            Affection level: <Score score={data.affection_level} />
          </div>
          <div className="flex w-10/12 items-center justify-between gap-2">
            Child friendly: <Score score={data.child_friendly} />
          </div>
          <div className="flex  w-10/12 items-center justify-between gap-2">
            Grooming: <Score score={data.grooming} />
          </div>
          <div className="flex  w-10/12 items-center justify-between gap-2">
            Intelligence: <Score score={data.intelligence} />
          </div>
          <div className="flex w-10/12  items-center justify-between gap-2">
            Health issues: <Score score={data.health_issues} />
          </div>{' '}
          <div className="flex w-10/12  items-center justify-between gap-2">
            Social needs: <Score score={data.social_needs} />
          </div>{' '}
          <div className="flex w-10/12  items-center justify-between gap-2">
            Stranger friendly: <Score score={data.stranger_friendly} />
          </div>
        </div>
      </div>
      <div>
        <h3>Other photos</h3>
        <div></div>
      </div>
    </main>
  );
}
