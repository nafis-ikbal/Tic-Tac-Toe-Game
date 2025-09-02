import SquareTab from "../components/SquareTab";
import { calculateWinner } from "./JS_File/functions";

export default function Container() {
    const winner = calculateWinner(squares);
    let status;
    if(winner) {
        status = "winner: " + winner;
    } else {
        status = "Next player: " + (isMove ? "X" : "O");
    }

    return (
        <>
            <div>{status}</div>
            <SquareTab squares={squares} isMove={isMove}/>
        </>
    )
}