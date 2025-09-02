import "./comp_css/Square.css";

export default function Square({value, onSquareClick}){ 

    return (
        <button onClick={onSquareClick} className="sqrBtn">
            {value}
        </button>
    );
}