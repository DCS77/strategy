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

function Cell(Props: CellProps) {
  return (
    <div className={`list w-${Props.cols}`}> 
      <span id={`cell-${Props.rowIndex}-${Props.colIndex}`} >Cell</span>
    </div>
  )
}

function Row(Props: RowProps) {
  const Cols = (Array.from(new Array(Props.cols), (val, index) => <Cell key={`board-cell-${Props.index}-${index}`} cols={Props.cols} colIndex={index} rowIndex={Props.index}/>));

  const oddEven = Props.index % 2 === 0 ? 'even' : 'odd';

  return (
    <div className={`boardRow ${oddEven} h-${Props.rows}`}>
      {Cols}
    </div>
  )
}

function Grid(Props: GridProps) {
  const Rows = (Array.from(new Array(Props.rows), (val, index) => <Row key={`board-row-${index}`} index={index} rows={Props.rows} cols={Props.cols}/>));

  return (
    <div className='board'>
      {Rows}
    </div>
  )
}

function Board() {
  return (
    <React.Fragment>
      <div className='playerDetails'>
        Player Details
      </div>
        <Grid cols={5} rows={9}/>
      <div className='playerDetails'>
        Player Details
      </div>
    </React.Fragment>
  )
}

export default Board;