import SquareTab from "../components/SquareTab";
import { useState } from "react";
import "./comp_css/Game.css";
import Error from "../components/Error";
import { calculateWinner } from "./JS_File/functions";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const[currentMove, setCurrentMove] = useState(0);
    const isMove = currentMove % 2 === 0;  //boolean value (true when even, false when odd)
    //store currently selected move (squares array)
    const currentSquares = history[currentMove];  
    const winner = calculateWinner(currentSquares);  //find out winner
    //check for draw
    const isDraw = !winner && currentSquares.every((Square) => Square !== null);

    function handlePlay(nextSquares) {
        //create new array (contains all item of 'history')
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);  
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);  //it return current move
    }

    //used to show the history of move in UI
    const moves = history.map((squares, move) => {  //move is array(history) index
        let description;
        if(move > 0) {
            description = "Go back to move #" + move;
        } else {
            description = "Please start the Game!";
        }
        return ( 
            <li key={move}>
                <button onClick={() => jumpTo(move)} className="liBtn">
                    {description}
                </button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="column">
                <SquareTab isMove={isMove} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game-history column">
                <h1>Game History</h1>
                <ol className="yes">{moves}</ol>
                { !winner && isDraw && <Error/>}
            </div>
        </div>
    );
}

//this is for tracking history of game.
//in 'history' state variable we store 'square' value
//we store last square array history to 'currentSquares'
//SquareTab component called 'handlePlay' function & update the game
//update 'history' by appending 'history' array + new updated squares array(value) [setHistory()].
//use map method to transform 'history' of moves into react elements.
//'jumpTo' function implement korar age, we need to track which step user is viewing,
//so we add a new var 'currentMove' to track which step user is viewing,
//need to update currMove , for latest history tracking (ekta history dekhar(jaoar) por,
//  okhan theke onno history te jete chaite)