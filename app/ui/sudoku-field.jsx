'use client';

import { useState } from 'react';

export default function SudokuField({ field }) {
  const [value, setValue] = useState(field.value === '-' ? '' : field.value);
  return (
    <input
      className=' size-12 text-center border text-2xl text-red-400 read-only:text-black'
      onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value}
      readOnly={field.readOnly}
    />
  );
}
