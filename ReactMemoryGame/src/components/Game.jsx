import { useState } from "react";
import '../styles/game.css'

const cardInfo = [
    { "src": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", "name": "Charmander"},
    { "src": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png", "name": "Gengar"},
    { "src": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png", "name": "Mewtwo"},
    { "src": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", "name": "Pikachu"},
    { "src": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png", "name": "Magikarp"},
    { "src": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png", "name": "Eevee"},
    { "src": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png", "name": "Meowth"},
    { "src": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png", "name": "Mudkip"},

]

function Game() {

    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)

    const newGameshuffleCards = () => {
        const shuffledCards = [...cardInfo]
        .sort(()=> Math.random() - 0.5)
        .map((card) => ({...card, id:Math.random() }))

        setCards(shuffledCards)
        setTurns(0)
    }

    const shuffleCards = () => {
        const shuffledCards = [...cardInfo]
        .sort(()=> Math.random() - 0.5)
        .map((card) => ({...card, id:Math.random() }))

        setCards(shuffledCards)
        setTurns(turns + 1)
    }



    return (
        <>
        <div className="aboveGameContainer">
        <button className="newGame" onClick={newGameshuffleCards}>New Game</button>
        <h3 className="score">Score: {turns}</h3>
        </div>
        <div className="gameContainer">
        {cards.map((card) => (
                <button className="cardButton" key={card.id} onClick={shuffleCards}>
                    <div>
                    <img src={card.src} />
                    <div className="pokeName">{card.name} </div>
                    </div>
                </button>
            ))}
        </div>



        </>
    )
}

export default Game




