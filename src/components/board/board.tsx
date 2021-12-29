import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18nextConf';
import './board.css';

interface BoardProps {
  short?: boolean;
}

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
  short?: boolean;
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
    <div className={`board-row ${oddEven} h-${rows}`}>
      {Cols}
    </div>
  );
};

const Grid = (Props: GridProps) => {
  const { cols, rows, short } = Props;
  const Rows = (Array.from(new Array(rows), (val, index) => (
    <Row
      key={`board-row-${index}`}
      index={index}
      rows={rows}
      cols={cols}
    />
  )));

  return (
    <div className={`board ${short ? 'board-short' : 'board-tall'}`}>
      {Rows}
    </div>
  );
};

const Board = (Props: BoardProps) => {
  const { t } = useTranslation('translation', { i18n });
  const { short } = Props;
  return (
    <>
      <div className='playerDetails'>
        {t('Player Details')}<br />
        {t('Armies')}
      </div>
      <Grid cols={5} rows={9} short={short} />
      <div className='playerDetails'>
        {t('Player Details')}<br />
        {t('Armies')}
      </div>
    </>
  );
};

export default Board;
