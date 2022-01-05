import i18n from '../i18nextConf';

function YouHaveXArmies(numArmies: number) {
  switch (i18n.resolvedLanguage) {
    case 'en':
      if (numArmies === 0) { return 'You have no armies yet.'; }
      return `You have ${numArmies} ${numArmies === 1 ? ' army.' : ' armies.'}`;
    case 'es':
      if (numArmies === 0) { return 'No tienes ejércitos.'; }
      return `Tienes ${numArmies} ${numArmies === 1 ? ' ejército.' : ' ejércitos.'}`;
    case 'ja':
      if (numArmies === 0) { return 'あなたには軍隊がありません。'; }
      return `${numArmies}${numArmies >= 10 ? '' : 'つ'}の軍隊を持っています。`;
    default: return '<Missing Translation - Only English, Spanish or Japanese are currently supported>';
  }
}

function PointsRemaining(points: number) {
  switch (i18n.resolvedLanguage) {
    case 'en': return `${points} points remaining`;
    case 'es': return `Quedan ${points} puntos`;
    case 'ja': return `残り${points}ポイント`;
    default: return '<Missing Translation - Only English, Spanish or Japanese are currently supported>';
  }
}

function Translate(key: string, data: any) {
  switch (key) {
    case 'YouHaveXArmies': return YouHaveXArmies(data);
    case 'PointsRemaining': return PointsRemaining(data);
    default: return '<Unknown Translation>';
  }
}

export default Translate;
