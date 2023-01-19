import GridRow from "./SubComponents/GridRow"
import "./Grid.scss"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { setAlphaActionCreator, setCategory1ActionCreator, setCategory2ActionCreator, setCategory3ActionCreator, setFinalWordActionCreator, setScoreActionCreator, setTurnsActionCreator } from "../Reducer/gameReducer";
import { isValidWord } from "../Validators/wordValidator";
import { saveWordleState } from "../Validators/stateValidator";

function Grid() {
  const [word, setWord] = useState([]);
  const {dailyWord, turns, alpha, alphaCat1, alphaCat2, alphaCat3, finalWord, mode, score} = useSelector(state=>state);
  const [msg, setMsg] = useState('');
  const dispatch = useDispatch();
  const [active, setActive] = useState(turns.findIndex(a=>a.length===0));

  const validEnterHandler = () => {
    const updatedTurns = turns.map((turn,i)=>{
      if(i===active) return word;
      else return turn;
    })
    dispatch(setTurnsActionCreator(updatedTurns));
    let updatedCategory1 = [...alphaCat1];
    let updatedCategory2 = [...alphaCat2];
    let updatedCategory3 = [...alphaCat3];
    word.forEach((ch,i) => {
      let dWIndex = dailyWord.findIndex(a=>a===ch);
      if(dWIndex===-1) {
        if(updatedCategory1.indexOf(ch)===-1) updatedCategory1.push(ch);
      } else if(dWIndex===i) {
        if(updatedCategory3.indexOf(ch)===-1) updatedCategory3.push(ch);
        if(updatedCategory2.indexOf(ch)!==-1) updatedCategory2 = updatedCategory2.filter(e=>e!==ch);
      } else {
        if(updatedCategory2.indexOf(ch)===-1) updatedCategory2.push(ch);
      }
    });
    dispatch(setCategory1ActionCreator(updatedCategory1));
    dispatch(setCategory2ActionCreator(updatedCategory2));
    dispatch(setCategory3ActionCreator(updatedCategory3));
    let updatedFinalWord = finalWord;
    let updatedScore = score;
    if(word.join('')===dailyWord.join('')) {
      updatedFinalWord = 'Y';
      updatedScore[0]++;
      updatedScore[1]++;
      dispatch(setFinalWordActionCreator(updatedFinalWord));
      dispatch(setScoreActionCreator(updatedScore));
      setMsg('Perfect!');
      setActive(-2);
    } else {
      if(active<5) { setActive(v=>v+1); }
      else {
        updatedFinalWord = 'Y';
        updatedScore[1]++;
        dispatch(setFinalWordActionCreator(updatedFinalWord));
        dispatch(setScoreActionCreator(updatedScore));
        setMsg(dailyWord.join(''));
        setActive(-1);
      }
    }
    setWord([]);
    const updatedState = {
      dailyWord,
      turns: updatedTurns,
      alpha: '',
      alphaCat1: updatedCategory1,
      alphaCat2: updatedCategory2,
      alphaCat3: updatedCategory3,
      finalWord: updatedFinalWord,
      mode: mode,
      score: updatedScore
    };
    saveWordleState(updatedState);
  };

  useEffect(() => {
    if(finalWord==='N') {
      if(alpha && alpha!=='ENTER' && alpha!=='BACKSPACE') {
        if(word.length===0) setWord([alpha]);
        if(word.length>0 && word.length<5) {
          const newWord = [...word, alpha];
          setWord(newWord);
        }
        dispatch(setAlphaActionCreator(''));
      } else if(alpha==='BACKSPACE') {
        if(word.length>0) {
          const newWord = word.slice(0,-1);
          setWord(newWord);
        }
        dispatch(setAlphaActionCreator(''));
      } else if(alpha==='ENTER') {
        if(word.length===5) {
          const isWord = isValidWord(word);
          if (isWord) { validEnterHandler(); }
          else { setMsg('Not A Word'); }
        } else {setMsg('Not Enough Letters');}
        dispatch(setAlphaActionCreator(''));
      }
    }
  }, [alpha])
  
  useEffect(() => {
    setActive(turns.findIndex(a=>a.length===0));
  }, [turns])

  useEffect(() => {
    const msgCleaner = setTimeout(() => {
      if (msg==='Not A Word' || msg==='Not Enough Letters') setMsg('');
    }, 1500);
  
    return () => clearTimeout(msgCleaner);
  }, [msg])

  useEffect(() => {
    if(finalWord==='N') setMsg('');
  }, [finalWord])
  
  
  return (
    <div className="gridContainer">
      <div className="user-alert">{(msg) && <span className={mode}>{msg}</span>}</div>
      <div className="grid">
        {
          turns?.map((turn,i)=>{
          if(i===active) { return <GridRow key={i} word={word} isActive={true}/> }
          else { return <GridRow key={i} word={turn} isActive={false}/> }
        })
        }
      </div>
    </div>
  )
}
export default Grid