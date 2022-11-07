import React from 'react';

function Score({ score }: { score: number }) {
  const MAX = 5;
  const elements = [];

  for (let i = 0; i < MAX; i++) {
    elements.push(
      <div
        key={i}
        className={`h-3 w-14 rounded-lg ${
          i <= score ? 'bg-stone-600' : 'bg-neutral-200'
        }`}
      />
    );
  }
  return (
    <div className="flex w-2/4 justify-end gap-2 lg:w-full">{elements}</div>
  );
}

export default React.memo(Score);
