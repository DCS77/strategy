import React from 'react';
import { useHistory } from 'react-router-dom';
import { Army as ArmyType } from '../../../API';
import ArmyPieceCounts from '../armyPieceCounts/armyPieceCounts';

const ArmyOverviewSection = (army: ArmyType) => {
  const { id, name, pieces } = army;
  return (
    <div key={id}>
      <span className='padding-left'>{name}</span>
      <div className='army-container'>
        <ArmyPieceCounts pieces={pieces} id={id} />
      </div>
      <br />
    </div>
  );
};

interface UserArmyListProps {
  armies: ArmyType[];
}

const ArmyPiecesList = (Props: UserArmyListProps) => {
  const history = useHistory();
  const { armies } = Props;

  return (
    <>
      { armies.map((army: ArmyType) => ArmyOverviewSection(army)) }
    </>
  );
};

export default ArmyPiecesList;
