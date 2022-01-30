import React, { useEffect } from 'react';
import GamesList from '../../components/play/gamesList/gamesList';
import { fetchPendingGames } from '../../ts/db/play';
import { StateProps, useStateValue } from '../../state/state';

interface ViewProps {
  SearchForGame: any;
  t: any;
}

const CreateNewGame = (Props: ViewProps) => {
  const { SearchForGame, t } = Props;
  const { state, dispatch } = useStateValue();

  useEffect(() => {
    fetchPendingGames().then((result) => {
      console.log('fetchPendingGames: ', result);
      dispatch({
        type: 'setPendingGames',
        value: result || [],
      });
    })
      .catch((error) => console.log('fetchPendingGames error', error));

    if (!state.pendingGamesSubscription) {
      // TODO: subsribe to pendingGames
    }
  }, []);

  return (
    <>
      Create a new game<br />
      <button type='button' onClick={SearchForGame}>
        Add game tab
      </button><br />
      Games being searched for
      <GamesList games={state.pendingGames} />
    </>
  );
};

export default CreateNewGame;
