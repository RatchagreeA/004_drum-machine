import "./App.scss";
import { useState, useEffect } from "react";

function App() {
    const [volume, setVolume] = useState(0.3);
    const [powStatus, setPowStatus] = useState(true);
    const [bankStatus, setBankStatus] = useState(true);
    const [bank, setBank] = useState(bankOne);

    const playFcn = (key) => {
        const sound = document.getElementById(key);
        sound.currentTime = 0;
        sound.volume = volume;
        sound.play();
    };
    useEffect(() => {
        if (bankStatus) {
            setBank(bankOne);
        } else {
            setBank(bankTwo);
        }
        console.log("pow " + powStatus);
    }, [bankStatus, powStatus]);
    return (
        <div className="App">
            <div id="drum-machine">
                <h1 id="display">{"drum-machine"}</h1>
                <ToggleBar
                    text={"Power"}
                    style={
                        powStatus
                            ? { justifyContent: "flex-end" }
                            : { justifyContent: "flex-start" }
                    }
                    setStatus={() => setPowStatus(!powStatus)}
                />
                <ToggleBar
                    text={"Bank"}
                    style={
                        bankStatus
                            ? { justifyContent: "flex-end" }
                            : { justifyContent: "flex-start" }
                    }
                    setStatus={() => setBankStatus(!bankStatus)}
                />
                <VolumeSlider volume={volume} setVolume={setVolume} />
                <Keyboard musicPack={bank} playFcn={playFcn} />
            </div>
        </div>
    );
}
const ToggleBar = ({ text, style, setStatus }) => {
    return (
        <div className="toggle-bar" onClick={setStatus}>
            <h2>{text}</h2>
            <div className="toggle-container" style={style}>
                <div className="toggle-status"></div>
            </div>
        </div>
    );
};
const VolumeSlider = ({ volume, setVolume }) => {
    return (
        <div className="volume-slider">
            <h2>{"Volume: " + Math.round(volume * 100)}</h2>
            <input
                max="1"
                min="0"
                onChange={(e) => setVolume(e.target.value)}
                step="0.01"
                type="range"
                value={volume}
            />
        </div>
    );
};
const Keyboard = ({ musicPack, playFcn }) => {
    return (
        <div className="box-container">
            {musicPack.map((sound, idx) => (
                <Key sound={sound} key={idx} playFcn={playFcn} />
            ))}
        </div>
    );
};
const Key = ({ sound, playFcn }) => {
    const handleKeydown = (event) => {
        if (event.keyCode === sound.keyCode) {
            playFcn(sound.id);
        }
    };
    useEffect(() => {
        console.log("st");
        document.addEventListener("keydown", handleKeydown);
        return () => {
            console.log("ret");
            document.removeEventListener("keydown", handleKeydown);
        };
    }, [sound]);
    return (
        <div className="box" onClick={() => playFcn(sound.id)}>
            <h2 className="key-text">{sound.keyTrigger}</h2>
            <audio className="clip" id={sound.id} src={sound.url} />
        </div>
    );
};
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

const bankTwo = [
    {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Chord-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
        keyCode: 87,
        keyTrigger: "W",
        id: "Chord-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
        keyCode: 69,
        keyTrigger: "E",
        id: "Chord-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
        keyCode: 65,
        keyTrigger: "A",
        id: "Shaker",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
        keyCode: 83,
        keyTrigger: "S",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
        keyCode: 68,
        keyTrigger: "D",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Punchy-Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
        keyCode: 88,
        keyTrigger: "X",
        id: "Side-Stick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
        keyCode: 67,
        keyTrigger: "C",
        id: "Snare",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
];
