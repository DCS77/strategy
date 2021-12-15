import React, { /*useCallback,*/ useEffect, useState } from 'react';
import '../page.css';
import '../../App.css';
import NavigationList from '../../components/navigation/navigationList';
import BarItem from '../../components/items/barItem';
import { TabType } from '../../types';
import { listArmies } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { Army as ArmyType, ListArmiesQuery, PieceType } from '../../API';
import { GraphQLResult } from '@aws-amplify/api';
import { EnvelopeSimple, Jeep, PersonSimpleWalk, Plus, Storefront, Sword, Wall } from 'phosphor-react';
import _ from 'lodash';

interface ArmyProps {
  createTab: (ID: string, path: string, title: string, type: TabType) => void;
}

interface CentrePageProps {
  page: string;
  armies: ArmyType[];
}

interface HomePageProps {
  armies: ArmyType[];
}

interface Piece {
  type: PieceType;
  count: number;
}

interface PieceDescriptionProps {
  type?: PieceType;
  addPiece: (type: PieceType) => void;
}

interface CurrentArmyPiecesProps {
  pieces: Piece[];
}

function PieceCost(type: PieceType) {
  switch(type) {
    case PieceType.adventurer: return 6;
    case PieceType.commoner: return 1;
    case PieceType.engineer: return 4;
    case PieceType.knight: return 8;
    case PieceType.messenger: return 2;
    case PieceType.smuggler: return 8;
  }
}

function ArmyItems(army: ArmyType) {
  return (
    <BarItem key={army.id} mouseUpHandler={() => SetCurrentArmy(army.id)}>{army.name}</BarItem>
  );
}

function SetCurrentArmy(id: string) {
  console.log('setcurrentarmy called', id);
}

function GetPieceIcon(type: PieceType){
  switch(type) {
    case PieceType.adventurer: return <PersonSimpleWalk/>;
    case PieceType.commoner: return <Storefront/>;
    case PieceType.engineer: return <Wall/>;
    case PieceType.knight: return <Sword/>;
    case PieceType.messenger: return <EnvelopeSimple/>;
    case PieceType.smuggler: return <Jeep/>;
  }
}

function ArmyPieceCount(piece: Piece){
  return (
    <span title={piece.type} className='bar-spaced pieceContainer'>{GetPieceIcon(piece.type)} {piece.count}</span>
  );
}

function CurrentArmyPieces(Props: CurrentArmyPiecesProps) {
  if(Props.pieces.length === 0) {
    return (<div>You have not added any pieces.</div>);
  }

  return (
    <span>
      { Props.pieces.map((piece: Piece) => ArmyPieceCount(piece)) }
    </span>
  );
}

function PieceDescription(Props: PieceDescriptionProps) {
  switch(Props.type) {
    case PieceType.adventurer:
      return (
        <div className='padded'>
          <h3>Adventurer</h3>
          <p>The adventurer is balanced in strength and speed.</p>
          <p><b>Strength</b> 3</p>
          <p><b>Speed</b> 3 <i>(cells per turn)</i></p>
          <p><b>Abilities </b> No special abilities.</p>
          <BarItem largeButtons={true} standout={true} mouseUpHandler={() => Props.addPiece(PieceType.adventurer)}>
            <span className='inline flex-center all-spaced'>Add (6 points)</span>
          </BarItem>
        </div>
      );
    case PieceType.commoner:
      return (
        <div className='padded'>
          <h3>Commoner</h3>
          <p>Commoners are cheap, but are not strong enough to finish off enemies by themselves.</p>
          <p><b>Strength</b> 1</p>
          <p><b>Speed</b> 3 <i>(cells per turn, forward movements only)</i></p>
          <b>Abilities</b>
          <p>When a commoner enters a cell with enemies, a battle doesn't instantly occur.</p>
          <p>A battle only occurs when a non-commoner piece of yours enters the cell.</p>
          <p>Additonally, commoners return to your piece pool after losing a battle.</p>
          <BarItem largeButtons={true} standout={true} mouseUpHandler={() => Props.addPiece(PieceType.commoner)}>
            <span className='inline flex-center all-spaced'>Add (1 points)</span>
          </BarItem>
        </div>
      );
      case PieceType.engineer:
        return (
          <div className='padded'>
            <h3>Engineer</h3>
            <p>Engineers are not strong but provide a tactical advantage on the battlefield.</p>
            <p><b>Strength</b> 1</p>
            <p><b>Speed</b> 1 <i>(cell per turn, foward movements only)</i></p>
            <b>Abilities</b>
            <p>Engineers can build walls to slow down opponents.</p>
            <p>Your walls can be scaled by any piece, but slow down the enemies by 3 of their remaining moves.</p>
            <p>Enemy pieces are also strength 1 while on cells with a wall of yours.</p>
            <p>They are expended after building a wall.</p>
            <BarItem largeButtons={true} standout={true} mouseUpHandler={() => Props.addPiece(PieceType.engineer)}>
              <span className='inline flex-center all-spaced'>Add (4 points)</span>
            </BarItem>
          </div>
        );
      case PieceType.knight:
        return (
          <div className='padded'>
            <h3>Knight</h3>
            <p>Knights are strong and fast.</p>
            <p><b>Strength</b> 5</p>
            <p><b>Speed</b> 3 <i>(cells per turn)</i></p>
            <p><b>Abilities </b>No special abilities.</p>
            <BarItem largeButtons={true} standout={true} mouseUpHandler={() => Props.addPiece(PieceType.knight)}>
              <span className='inline flex-center all-spaced'>Add (8 points)</span>
            </BarItem>
          </div>
        );
      case PieceType.messenger:
        return (
          <div className='padded'>
            <h3>Messenger</h3>
            <p>Messengers are fast but weak.</p>
            <p><b>Strength</b> 1</p>
            <p><b>Speed</b> 4 <i>(cells per turn)</i></p>
            <p><b>Abilities </b>No special abilities.</p>
            <BarItem largeButtons={true} standout={true} mouseUpHandler={() => Props.addPiece(PieceType.messenger)}>
              <span className='inline flex-center all-spaced'>Add (2 points)</span>
            </BarItem>
          </div>
        );
      case PieceType.smuggler:
        return (
          <div className='padded'>
            <h3>Smuggler</h3>
            <p>Smugglers have the means of transporting pieces, but cannot protect you from enemies.</p>
            <p><b>Strength</b> 1</p>
            <p><b>Speed</b> 4 <i>(cells per turn)</i></p>
            <b>Abilities</b>
            <p>When you move a smuggler, you can choose to transport up to 4 other pieces. The other pieces must be on the same cell as the smuggler.</p>
            <p>Pieces sharing a cell with their smuggler all have strength 1.</p>
            <BarItem largeButtons={true} standout={true} mouseUpHandler={() => Props.addPiece(PieceType.smuggler)}>
              <span className='inline flex-center all-spaced'>Add (8 points)</span>
            </BarItem>
          </div>
        );
    default:
      return (
        <div className='padded'>
          Select a piece type to see details and add it to your army.
        </div>);
  }
}

function HomePage(Props: HomePageProps) {
  return (
  <React.Fragment>
    <div>
      <h1>Your Armies</h1>
      You have {Props.armies.length} armies.
      {Props.armies.length ?
        ` Select one to view and edit, or click the Plus (+) button to create a new one.` :
        ` Click the Plus (+) button on the side to get started.`}
    </div>
  </React.Fragment>)
}

function CreatePage() {
  const [selectedPiece, updateSelectedPiece] = useState<PieceType | undefined>(undefined);
  const [pieces, updatePieces] = useState<Piece[]>([]);
  const [points, updatePoints] = useState<number>(50);

  function AddPiece(type: PieceType){
    const localPieces = _.cloneDeep(pieces);
    let found = localPieces.find( piece => piece.type === type );
    if(found) {
      found.count++;
    } else {
      let newPiece: Piece = {type: type, count: 1};
      localPieces.push(newPiece);
    }
    updatePoints(points - PieceCost(type));
    updatePieces(localPieces);
  }

  return (
  <React.Fragment>
    <div>
      <h1>Create an Army</h1>
      Select the pieces you want. Use up to 50 points per team.
    </div>
    
    <div className='pieceRow'>
      <br/>
      <div className=''>
        <h3>{points} points remaining</h3>
        <div className='armyContainer'>
          <CurrentArmyPieces pieces={pieces}/>
        </div>
      </div>
      <br/>
      <div className='column30'>
        <h3>Pieces</h3>
        <BarItem largeButtons={true} mouseUpHandler={() => updateSelectedPiece(PieceType.adventurer)}>
          <span className='inline flex-center all-spaced'><PersonSimpleWalk/> Adventurer</span>
        </BarItem>
        <BarItem largeButtons={true} mouseUpHandler={() => updateSelectedPiece(PieceType.commoner)}>
          <span className='inline flex-center all-spaced'><Storefront/> Commoner</span>
        </BarItem>
        <BarItem largeButtons={true} mouseUpHandler={() => updateSelectedPiece(PieceType.engineer)}>
          <span className='inline flex-center all-spaced'><Wall/> Engineer</span>
        </BarItem>
        <BarItem largeButtons={true} mouseUpHandler={() => updateSelectedPiece(PieceType.knight)}>
          <span className='inline flex-center all-spaced'><Sword/> Knight</span>
        </BarItem>
        <BarItem largeButtons={true} mouseUpHandler={() => updateSelectedPiece(PieceType.messenger)}>
          <span className='inline flex-center all-spaced'><EnvelopeSimple/> Messenger</span>
        </BarItem>
        <BarItem largeButtons={true} mouseUpHandler={() => updateSelectedPiece(PieceType.smuggler)}>
          <span className='inline flex-center all-spaced'><Jeep/> Smuggler</span>
        </BarItem>
      </div>
      <div className='column70'>
        <PieceDescription type={selectedPiece} addPiece={AddPiece}/>
      </div>
    </div>
  </React.Fragment>)
}

function CentrePage(Props: CentrePageProps) {
  switch(Props.page) {
    case 'home': return (<HomePage armies={Props.armies}/>);
    case 'create': return CreatePage();
    default: return (<div>404</div>);
  }
}

function Army(Props: ArmyProps) {
  const [armies, updateArmies] = useState<ArmyType[]>([]);
  const [centrePage, updateCentrePage] = useState('home');

  async function getPageData() {
    try {
      const armyData = (await API.graphql(graphqlOperation(listArmies))) as GraphQLResult<ListArmiesQuery>;
      return armyData?.data?.listArmies?.items;
    }
    catch(error) {
      console.log('Error: ', error);
    }
    return [];
  }

  useEffect(() => {
    Props.createTab('army', 'army', 'Your Army', TabType.Army);

    let isMounted = true;
    getPageData().then(result => {
      if (isMounted) updateArmies(result ? result : []);
    });
    return () => { isMounted = false };
  }, [Props]);

  function ShowHomePage() { updateCentrePage('home'); }
  function ShowCreateArmyPage() { updateCentrePage('create'); }

  return (
    <div className='full-size gameRow'>
      <div className='leftColumn'>
        <div className='navSection'>
          <NavigationList/>
        </div>
        <div className='selectTeam no-select'>
          <BarItem mouseUpHandler={ShowHomePage}>Your Armies</BarItem>
          { armies.map((army: ArmyType) => ArmyItems(army)) }
          <BarItem mouseUpHandler={ShowCreateArmyPage}><Plus/></BarItem>
        </div>
      </div>
      <div className='armyColumn'>
        <CentrePage page={centrePage} armies={armies}/>
      </div>
      <div className='rightColumn'>
        <div className='actionSection'>
          Process and actions
        </div>
        <div className='chatSection'>
          Chat
        </div>
      </div>
    </div>
  )
};

export default Army;