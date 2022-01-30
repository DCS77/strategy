import React from 'react';
import Board from '../../components/board/board';
import CreateNewGameCentre from './createGame';
import DefaultNarrowView from '../structures/defaultNarrowView';
import DefaultWideView from '../structures/defaultWideView';

interface ViewProps {
  SearchForGame: any;
  t: any;
}

interface ShowGameViewProps {
  t: any;
}

export const NarrowPlayView = (Props: ViewProps) => {
  const { SearchForGame, t } = Props;

  return (
    <DefaultNarrowView
      Elements={[
        <CreateNewGameCentre SearchForGame={SearchForGame} t={t} />,
        t('Chat'),
      ]}
    />
  );
};

export const WidePlayView = (Props: ViewProps) => {
  const { SearchForGame, t } = Props;

  return (
    <DefaultWideView
      Centre={<CreateNewGameCentre SearchForGame={SearchForGame} t={t} />}
      BottomRight={t('Chat')}
    />
  );
};

export const NarrowShowGameView = (Props: ShowGameViewProps) => {
  const { t } = Props;

  return (
    <DefaultNarrowView
      Elements={[
        t('Opponent Details'),
        <Board short />,
        t('Chat'),
        t('Move History'),
      ]}
    />
  );
};

export const WideShowGameView = (Props: ShowGameViewProps) => {
  const { t } = Props;

  return (
    <DefaultWideView
      BottomLeft={t('Move History')}
      Centre={<Board />}
      TopRight={t('Opponent Details')}
      BottomRight={t('Chat')}
    />
  );
};
