import React from 'react';
import { Army as ArmyType } from '../../../API';
import BarItem from '../../items/barItem';
import { useHistory } from 'react-router-dom';

interface UserArmyListProps {
  armies: ArmyType[];
}

function ArmyList(Props: UserArmyListProps) {
  const history = useHistory();

  function ArmyItem(army: ArmyType) {
    return (
      <BarItem key={army.id} mouseUpHandler={() => history.push(`/army/${army.id}`)}>{army.name}</BarItem>
    );
  }
  
  return (
    <React.Fragment>
      { Props.armies.map((army: ArmyType) => ArmyItem(army)) }
    </React.Fragment>
  );
};

export default ArmyList;