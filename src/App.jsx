import React, { useEffect, useState } from "react";
import "./App.css";
import hourglass from "./assets/Spinner.gif";
import "98.css";
import Notepad from './components/notepad';
import AudioPlayer from './components/AudioPlayer';
import DraggableWindow from "./components/DraggableWindow";
import DocumentsWindow from "./components/DocumentsWindow"; 

function App() {
  const spotifyLink = "https://open.spotify.com/embed/track/";
  const [allWaves, setAllWaves] = useState([]);
  const [waveCount, setWaveCount] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(false); // State to manage Documents window visibility

  useEffect(() => {
    // Fetch songs from the backend
    fetch('http://localhost:5001/songs') // Updated port to 5001
      .then(response => response.json())
      .then(data => {
        setAllWaves(data);
        setWaveCount(data.length);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    setWaveCount(allWaves.length);
  }, [allWaves]);

  const wave = async () => {
    if (messageValue.length >= 73 && messageValue.includes('spotify.com')) {
      try {
        const newWave = {
          address: "0x0000000000000000000000000000000000000000",
          timestamp: new Date(),
          message: messageValue,
        };
        // Save the new song to the backend
        fetch('http://localhost:5001/songs', { // Updated port to 5001
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newWave),
        })
          .then(response => response.json())
          .then(data => {
            setAllWaves([...allWaves, data]);
            alert('All done. Thank you for sending a song!');
            setMessageValue("");
          })
          .catch(error => console.log(error));
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("That's not a spotify URL");
      alert("That's not a Spotify URL, try again.");
    }
  };

  function func(event) {
    let str = event.target.value;
    let array = str.split(".com/");
    let joined = array[0] + ".com/embed/" + array[1];
    setMessageValue(joined);
    console.log("function happened", joined);
  }

  return (
    <main>
      <div className="alertmessage">
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">Stoop Sale Invite</div>
          </div>
          <div className="window-body">
            <img src="https://i.imgur.com/AwI7EDk.png" alt="" />
            <p>In the spirit of Windows 98, this Stoop Sale Invite isn't optimised for mobile screens yet. </p>
            <p>Please come back in 20 years or checkout the desktop version.</p>
          </div>
          <section className="field-row" style={{ "justify-content": "flex-end" }}>
            <button>OK</button>
            <a href="https://youtu.be/OlD642mWrhM" target="_blank"><button>Not OK</button></a>
          </section>
        </div>
      </div>
      <div id="desktop">
        <div className='row'>
          <div className="column left">
            <div className="desktop-icons">
              <div className="desktop-icon my-computer" title="My Computer">
                My Computer
              </div>
              <div className="desktop-icon my-documents" title="My Documents" onClick={() => setIsDocumentsOpen(true)}>
                My Documents
              </div>
              <div className="desktop-icon network" title="Network Neighborhood">
                Network Neighborhood
              </div>
              <div className="desktop-icon stoop" title="Stoop Pic">
              </div>
            </div>
          </div>
          <div className="column middle">
            <Notepad />
            <DraggableWindow />
          </div>
          <div className="column right">
            <AudioPlayer
              waveCount={waveCount}
              messageValue={messageValue}
              func={func}
              wave={wave}
              allWaves={allWaves}
            />
          </div>
        </div>
      </div>
      {isDocumentsOpen && <DocumentsWindow onClose={() => setIsDocumentsOpen(false)} />}
      <div className="startbar">
        <div id="toolbar">
          <div className="toolbar-start-menu">
            <button className="start-button">
              Start
            </button>
          </div>
          <div className="toolbar-separator"></div>
          <div className="toolbar-left">
            <label className="toolbar-icon ie"></label>
            <label className="toolbar-icon outlook"></label>
            <label className="toolbar-icon desktop"></label>
          </div>
          <div className="toolbar-separator"></div>
          <a href="https://www.depop.com" target="_blank"><button className="rink" style={{ "margin": "5px" }}>Can't make it? Check out our depop! 👚👗👟</button></a>
          <div className="toolbar-right">
            <div className='time'>🍋 12 July 2024</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;