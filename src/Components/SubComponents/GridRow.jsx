import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import "./GridRow.scss"

function GridRow({ word, isActive }) {
  const { dailyWord } = useSelector(state=>state);
  const [styleArray, setStyleArray] = useState(['box','box','box','box','box']);

  useEffect(() => {
    if (!isActive && word.length>0) {
      let applyStyle = [];
      word.forEach((e,i) => {
        if(dailyWord[i]===e) { applyStyle.push('green'); }
        else if(dailyWord.includes(e)) { applyStyle.push('yellow'); }
        else { applyStyle.push('grey'); }
      });
      setStyleArray(applyStyle);
    } else {
      let applyStyle = [];
      for (let index = 0; index < 5; index++) {
        if(word[index]) { applyStyle.push('box-selected'); }
        else { applyStyle.push('box'); }
      }
      setStyleArray(applyStyle);
    }
  }, [word, isActive]);
  
  return (
    <div className="row">
      <div className={styleArray[0]}>{word[0]}</div>
      <div className={styleArray[1]}>{word[1]}</div>
      <div className={styleArray[2]}>{word[2]}</div>
      <div className={styleArray[3]}>{word[3]}</div>
      <div className={styleArray[4]}>{word[4]}</div>
    </div>
  )
}
export default GridRow