import React from 'react';
import { Army as ArmyType } from '../../../API';
import BarItem from '../../items/barItem';
import i18n from '../../../i18nextConf';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

interface UserArmyListProps {
  armies: ArmyType[];
}

function ArmyItems(army: ArmyType) {
  const history = useHistory();
  return (
    <BarItem key={army.id} mouseUpHandler={() => history.push(`army/${army.id}`)}>{army.name}</BarItem>
  );
}

function UserArmyList(Props: UserArmyListProps) {
  const { t } = useTranslation('translation', { i18n });

  return (
    <React.Fragment>
      { Props.armies.map((army: ArmyType) => ArmyItems(army)) }
    </React.Fragment>
  );
};

export default UserArmyList;