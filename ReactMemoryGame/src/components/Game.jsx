import { useState } from "react";
import '../styles/game.css'
import { useEffect } from "react";


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
    const [selected, setSelected] = useState([])
    const [bestTurns, setbestTurns] = useState(0)

    const newGameshuffleCards = () => {
        const shuffledCards = [...cardInfo]
        .sort(()=> Math.random() - 0.5)
        .map((card) => ({...card, id:Math.random() }))

        setCards(shuffledCards)
        setSelected([])
    }

    const shuffleCards = () => {
        const shuffledCards = [...cardInfo]
        .sort(()=> Math.random() - 0.5)
        .map((card) => ({...card, id:Math.random() }))

        setCards(shuffledCards)

    }
       

    const handleChoice = (card) => {
        if (selected.indexOf(card) === -1) {
            setSelected([...selected, card]);
            shuffleCards();

        }
        else {
            newGameshuffleCards();
        }

        
    }

    
    useEffect(()=> {
        if (selected.length === 0 ) {
            setTurns(0);
        }
        else {
            setTurns(turns + 1)
        }
        if (selected.length === 8) {
            console.log('works');
            alert("You did it! Click the New Game button to play again!")
        }

    }, [selected]) 

    useEffect(() => {
        if(turns >= bestTurns) {
            setbestTurns(turns);
        }
    }, [turns])



    return (
        <>
        <div className="aboveGameContainer">
        <button className="newGame" onClick={newGameshuffleCards}>New Game</button>
        <h3 className="score">Score: {turns} Best Score: {bestTurns}</h3>
        </div>

        <div className="gameContainer">
        {cards.map((card) => (
                <button className="cardButton" key={card.id} onClick={()=>handleChoice(card.name)}>
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


