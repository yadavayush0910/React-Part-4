import { useState } from "react";

export default function LudoBoard() {
    const [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
    let [arr,SetArr]=useState(["no moves"]);
    const updateBlue = () => {
        // console.log(`moves.blue=${moves.blue}`);
        // setMoves(prevMoves => ({ ...prevMoves, blue: prevMoves.blue + 1 }));
        setArr((prevArr) => { return [...prevArr, "blue moves"]});
        console.log(arr);
    };

    const updateYellow = () => {
        console.log(`moves.yellow=${moves.yellow}`);
        setMoves(prevMoves => ({ ...prevMoves, yellow: prevMoves.yellow + 1 }));
    };

    const updateGreen = () => {
        console.log(`moves.green=${moves.green}`);
        setMoves(prevMoves => ({ ...prevMoves, green: prevMoves.green + 1 }));
    };

    const updateRed = () => {
        console.log(`moves.red=${moves.red}`);
        setMoves(prevMoves => ({ ...prevMoves, red: prevMoves.red + 1 }));
    };

    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
                
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>+1</button>
                
                <p>Green moves = {moves.green}</p>
                <button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>
                
                <p>Red moves = {moves.red}</p>
                <button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}
