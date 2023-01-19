import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import Grid from "../Components/Grid"
import HowToPlay from "../Components/HowToPlay";
import Keyboard from "../Components/Keyboard";
import NavHead from "../Components/NavHead"
import { setAlphaActionCreator, setLocalStateActionCreator } from "../Reducer/gameReducer";
import { updateWordleState } from "../Validators/stateValidator";

function Game() {
  const dispatch = useDispatch();
  const [firstTime, setFirstTime] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      const kc = e.keyCode;
      if ((+kc>64 && +kc<91) || +kc===8 || +kc===13) {
        const kd = (e.key).toUpperCase();
        dispatch(setAlphaActionCreator(kd));
      }
    };
    const savedWordle = updateWordleState();
    if(savedWordle) dispatch(setLocalStateActionCreator(savedWordle));
    else setFirstTime(true);
    window.addEventListener('keydown', handleKey);
  
    return () => {
      window.removeEventListener('keydown', handleKey);
    }
  }, []);
  
  return (
    <>
    { (firstTime) && <HowToPlay hide={setFirstTime}/> }
    <NavHead/>
    <Grid/>
    <Keyboard/>
    </>
  )
}
export default Game