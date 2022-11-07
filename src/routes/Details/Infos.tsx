import Score from '../../components/Score';

export default function Infos({ details }: { details: TCat }) {
  return (
    <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-28 lg:px-10">
      <img
        src={details.image.url}
        alt="cat"
        className="h-96 w-96 rounded-3xl object-cover"
      />
      <div className="flex flex-col gap-y-8">
        <h2 className="text-4xl font-semibold">{details.name}</h2>
        <p className="text-left">{details.description}</p>
        <p>
          <span className="font-bold">Temperament:</span> {details.temperament}
        </p>
        <p>
          <span className="font-bold">Origin:</span> {details.origin}
        </p>
        <p>
          <span className="font-bold">Life span:</span> {details.life_span}
        </p>
        <div className="score">
          <span className="font-bold">Adaptability:</span>{' '}
          <Score score={details.adaptability} />
        </div>
        <div className="score">
          <span className="font-bold">Affection level:</span>{' '}
          <Score score={details.affection_level} />
        </div>
        <div className="score">
          <span className="font-bold">Child friendly:</span>{' '}
          <Score score={details.child_friendly} />
        </div>
        <div className="score">
          <span className="font-bold">Grooming:</span>{' '}
          <Score score={details.grooming} />
        </div>
        <div className="score">
          <span className="font-bold">Intelligence:</span>{' '}
          <Score score={details.intelligence} />
        </div>
        <div className="score">
          <span className="font-bold">Health issues:</span>{' '}
          <Score score={details.health_issues} />
        </div>{' '}
        <div className="score">
          <span className="font-bold">Social needs:</span>{' '}
          <Score score={details.social_needs} />
        </div>{' '}
        <div className="score">
          <span className="font-bold">Stranger friendly:</span>{' '}
          <Score score={details.stranger_friendly} />
        </div>
      </div>
    </div>
  );
}
