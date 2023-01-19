import { useDispatch, useSelector } from "react-redux";
import { setLocalStateActionCreator, setModeActionCreator } from "../Reducer/gameReducer";
import { saveWordleState } from "../Validators/stateValidator";
import { nextPuzzle } from "../Validators/wordValidator";
import "./NavHead.scss";

function NavHead() {
  const state = useSelector(state=>state);
  const { dailyWord, mode, finalWord, score } = state;
  const dispatch = useDispatch();

  const modeSwitch = () => {
    let updatedMode = '';
    if(mode==='light') updatedMode = 'dark';
    else updatedMode = 'light';
    dispatch(setModeActionCreator(updatedMode));
    const updatedState = {...state, mode: updatedMode};
    saveWordleState(updatedState);
  };

  const gameRefresh = () => {
    const nextWord = nextPuzzle(dailyWord);
    const nextWordArray = (nextWord.length===5)?[...nextWord]:dailyWord;
    const updatedState = {
      ...state,
      dailyWord: nextWordArray,
      turns:[[],[],[],[],[],[]],
      alpha:'',
      alphaCat1:[],
      alphaCat2:[],
      alphaCat3:[],
      finalWord:'N'
    };
    dispatch(setLocalStateActionCreator(updatedState));
    saveWordleState(updatedState);
  };

  return (
    <div className="nav-head">
      <div className="sub-heads">
        <div onClick={modeSwitch}>&#9728;</div>
        <div onClick={gameRefresh}>{(finalWord==='Y') && <>Next &#8250;</>}</div>
      </div>
      <div className="title">Wordle</div>
      <div className="sub-heads">
        <span className="score">Score: {score[0]} / {score[1]}</span>
      </div>
    </div>
  )
}
export default NavHead