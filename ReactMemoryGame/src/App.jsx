import './App.css'
import Game from './components/Game.jsx'

function App() {


  return (
    <>
      <div className='header'>
        <div className='headerText'>
          <h1>Dev's Memory Game</h1>
          <h3>Click on a card only once to earn points, but don't click the same card twice or it's game over!</h3>
        </div>

      </div>

      <Game></Game>

      
    </>
  )
}

export default App
