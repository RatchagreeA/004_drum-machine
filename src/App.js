import "./App.scss";
import { useState, useEffect } from "react";

function App() {
    const [cnt, setCnt] = useState(0);

    return (
        <div className="App">
            <div id="drum-machine">
                <h1 id="display">{"drum-machine"}</h1>
                <h2>{cnt}</h2>
                <div className="btn" onClick={() => setCnt(cnt + 1)}>
                    xxxxx
                </div>
                <div className="box-container">
                    {bankOne.map((key, idx) => (
                        <Box keyTrigger={key.keyTrigger} key={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Box(props) {
    return (
        <div className="box">
            <h2 className="key-text">{props.keyTrigger}</h2>
        </div>
    );
}
export default App;

const bankOne = [
    {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
        keyCode: 87,
        keyTrigger: "W",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
        keyCode: 69,
        keyTrigger: "E",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
        keyCode: 65,
        keyTrigger: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
        keyCode: 83,
        keyTrigger: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
        keyCode: 68,
        keyTrigger: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
        keyCode: 88,
        keyTrigger: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
        keyCode: 67,
        keyTrigger: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
];
