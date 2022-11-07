export default function GridImages({ images }: { images: string[] }) {
  return (
    <div className="mt-20 mb-44">
      <h3 className="mb-10 text-4xl font-semibold">Other photos</h3>
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:flex-wrap xl:justify-start">
        {images.map((imageUrl) => {
          return (
            <img
              key={imageUrl}
              src={imageUrl}
              alt="cat"
              className="h-[278px] w-[278px] rounded-3xl object-cover"
            />
          );
        })}
      </div>
    </div>
  );
}
