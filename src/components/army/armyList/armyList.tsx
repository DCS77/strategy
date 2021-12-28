import React from 'react';
import { useHistory } from 'react-router-dom';
import { Army as ArmyType } from '../../../API';
import BarItem from '../../items/barItem';

interface UserArmyListProps {
  armies: ArmyType[];
}

const ArmyItem = (army: ArmyType, history: any) => {
  const { push } = history;
  const { id, name } = army;
  return (
    <BarItem key={id} mouseUpHandler={() => push(`/army/${id}`)}>{name}</BarItem>
  );
};

const ArmyList = (Props: UserArmyListProps) => {
  const history = useHistory();
  const { armies } = Props;

  return (
    <>
      { armies.map((army: ArmyType) => ArmyItem(army, history)) }
    </>
  );
};

export default ArmyList;
