import KeyboardButton from "./SubComponents/KeyboardButton";
import "./Keyboard.scss";

function Keyboard() {

  
  const keyL1 = ['Q','W','E','R','T','Y','U','I','O','P'];
  const keyL2 = ['A','S','D','F','G','H','J','K','L'];
  const keyL3 = ['ENTER','Z','X','C','V','B','N','M','BACKSPACE'];

  return (
    <div className="keyboard">
        <div className="line">
            { keyL1.map(a=><KeyboardButton key={a} a={a}/>) }
        </div>
        <div className="line">
            { keyL2.map(a=><KeyboardButton key={a} a={a}/>) }
        </div>
        <div className="line">
            { keyL3.map(a=><KeyboardButton key={a} a={a}/>) }
        </div>
    </div>
  )
}
export default Keyboard