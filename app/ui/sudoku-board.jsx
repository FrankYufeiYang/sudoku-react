import SudokuField from './sudoku-field';
export default function SudokuBoard({ puzzle }) {
  return (
    <div className=''>
      <div className=' m-auto pt-4 w-max '>
        {puzzle.map((row) => (
          <div className='' key={row.index}>
            {row.cols.map((field) => (
              <SudokuField key={field.col} field={field} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
