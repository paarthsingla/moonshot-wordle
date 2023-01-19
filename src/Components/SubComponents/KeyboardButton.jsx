import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlphaActionCreator } from "../../Reducer/gameReducer";
import "./KeyboardButton.scss"

function KeyboardButton({a}) {
    const dispatch = useDispatch();
    const { alphaCat1, alphaCat2, alphaCat3 } = useSelector(state=>state);
    const updateWord = arg => dispatch(setAlphaActionCreator(arg));
    const [style, setStyle] = useState('plain')

    useEffect(() => {
        if(alphaCat1.includes(a)) setStyle('grey');
        else if(alphaCat3.includes(a)) setStyle('green');
        else if(alphaCat2.includes(a)) setStyle('yellow');
        else setStyle('plain');
    }, [alphaCat1,alphaCat2,alphaCat3]);
    
  return (
    <button className={style} onClick={e=>updateWord(a)}>{a}</button>
  )
}
export default KeyboardButton;