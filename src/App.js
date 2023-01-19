import "./App.scss";
import { useSelector } from 'react-redux';
import Game from './Game/Game';

function App() {
  const{ mode } = useSelector(state=>state);
  return (
    <div className={'App-'+mode}>
      <Game/>
    </div>
  );
}

export default App;
