import { getSudoku } from 'sudoku-gen';
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';
import SudokuBoard from './ui/sudoku-board';
export default function Home() {
  const puzzle = generateSudokuPuzzle('easy');

  function generateSudokuPuzzle(diffculty: Difficulty) {
    const rawData = getSudoku(diffculty);
    const rows: object[] = [];
    for (let i = 0; i < 9; i++) {
      const row: { cols: object[]; index: number } = { cols: [], index: i + 1 };
      for (let j = 0; j < 9; j++) {
        const value = rawData.puzzle[i * 9 + j];
        const col = {
          row: i + 1,
          col: j + 1,
          value: value,
          readOnly: value !== '-',
        };
        row.cols.push(col);
      }
      rows.push(row);
    }
    return rows;
  }
  return (
    <main className=''>
      <div className='bg-[#282c34] p-8 flex flex-col items-center justify-center min-h-[20vh] font-extrabold '>
        <h1 className=' text-4xl text-white '>Sudoku Stack</h1>
      </div>
      <SudokuBoard puzzle={puzzle} />
    </main>
  );
}
