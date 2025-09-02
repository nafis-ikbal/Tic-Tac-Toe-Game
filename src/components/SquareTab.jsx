import Square from "../components/Square";
import "./comp_css/SquareTab.css";
import { calculateWinner } from "./JS_File/functions";

export default function SquareTab({isMove, squares, onPlay}) {

    function handleClick(i) {
        //check if any square filled with X/O & a player won
        if(squares[i] || calculateWinner(squares)) {
            return;  //function stopped here (return nothing), next line will not execute
        }

        const newSquares = squares.slice(); //create a copy of squares array (for immutability)

        if(isMove) {
            newSquares[i] = "X";  //update any value with 'X'
        } else {
            newSquares[i] = "O";  //update next value with 'O'
        }

        onPlay(newSquares);  //change the state with 'X/O'
    } 

    const winner = calculateWinner(squares);
    let status;
    if(winner) {
        status =
                <div>
                    <button className="btn">
                        <i className="animation"></i>
                            {"Winner: " + winner}
                        <i className="animation"></i>
                    </button>
                </div>;

    } else {
        status = "Next Player: " + (isMove ? "'X'" : "'O'");
    }

    return ( 
        <div className="container">
            <div className="status">{status}</div>
            <div className="SqrBox">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </div>
    );
}

//here we use "lifting state" , to collect state of every "square" component.
//array te square er value gulo thakbe.
//sei value gulo square e pass korte hbe props hisebe.
//'square' theke ekta funtion props hisebe 'squareTab' e pathabo, seta 'handelClick' funtion er sathe
//connect korbo.
//add another state 'isMove' to track player move.