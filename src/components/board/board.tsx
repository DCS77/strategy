import React from 'react';
import './board.css';

interface CellProps {
  cols: number;
  colIndex: number;
  rowIndex: number;
}

interface RowProps {
  cols: number;
  rows: number;
  index: number;
}

interface GridProps {
  cols: number;
  rows: number;
}

const Cell = (Props: CellProps) => {
  const { colIndex, cols, rowIndex } = Props;
  return (
    <div className={`list w-${cols}`}>
      <span id={`cell-${rowIndex}-${colIndex}`}>Cell</span>
    </div>
  );
};

const Row = (Props: RowProps) => {
  const { cols, index, rows } = Props;
  const Cols = (Array.from(new Array(cols), (val, colIndex) => (
    <Cell
      key={`board-cell-${index}-${colIndex}`}
      cols={cols}
      colIndex={colIndex}
      rowIndex={index}
    />
  )));

  const oddEven = index % 2 === 0 ? 'even' : 'odd';

  return (
    <div className={`boardRow ${oddEven} h-${rows}`}>
      {Cols}
    </div>
  );
};

const Grid = (Props: GridProps) => {
  const { cols, rows } = Props;
  const Rows = (Array.from(new Array(rows), (val, index) => (
    <Row
      key={`board-row-${index}`}
      index={index}
      rows={rows}
      cols={cols}
    />
  )));

  return (
    <div className='board'>
      {Rows}
    </div>
  );
};

const Board = () => (
  <>
    <div className='playerDetails'>
      Player Details
    </div>
    <Grid cols={5} rows={9} />
    <div className='playerDetails'>
      Player Details
    </div>
  </>
);

export default Board;
