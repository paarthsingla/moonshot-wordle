import './HowToPlay.scss';

function HowToPlay({ hide }) {
    const playClick = () => {
        hide(false);
    };

  return (
    <div className="how-to-play">
        <div className="instructions">
            <div className="heading">How To Play</div>
            <div className="sub-heading">Guess the Wordle in 6 tries.</div>
            <span>&#8226; Each guess must be a valid 5-letter word.</span>
            <span>&#8226; Color of tiles change to show how close you are.</span>
            <span> </span>
            <span><strong>Examples</strong></span>
            <div className='sample'>
            <div className="green">W</div>
            <div className="box">E</div>
            <div className="box">A</div>
            <div className="box">R</div>
            <div className="box">Y</div>
            </div>
            <span><strong>W</strong> is in the word and at correct spot.</span>
            <span> </span>
            <span> </span>
            <div className='sample'>
            <div className="box">P</div>
            <div className="yellow">I</div>
            <div className="box">L</div>
            <div className="box">L</div>
            <div className="box">S</div>
            </div>
            <span><strong>I</strong> is in the word but at wrong spot.</span>
            <span> </span>
            <span> </span>
            <div className='sample'>
            <div className="box">V</div>
            <div className="box">A</div>
            <div className="box">G</div>
            <div className="grey">U</div>
            <div className="box">E</div>
            </div>
            <span><strong>U</strong> is not in the word at any spot.</span>
            <span> </span>
            <span> </span>
            <div className="play" onClick={playClick}>Play &#8250;</div>
        </div>
    </div>
  )
}
export default HowToPlay