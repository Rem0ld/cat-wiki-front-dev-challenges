import React from 'react';

function Score({ score }: { score: number }) {
  const MAX = 5;
  const elements = [];

  for (let i = 0; i < MAX; i++) {
    elements.push(
      <div
        className={`h-3 w-14 rounded-lg ${
          i <= score ? 'bg-stone-600' : 'bg-neutral-200'
        }`}
      />
    );
  }
  return <div className="flex gap-2">{elements}</div>;
}

export default React.memo(Score);
