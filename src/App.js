import logo from './logo.svg';
import './App.css';
import {LoadScript, GoogleMap} from "@react-google-maps/api";

function Map() {
      return (
          <div className="App">
                <LoadScript
                    id="script-loader"
                    googleMapsApiKey="AIzaSyCNReGHN6Uan9yZY4Fjh0DwKN43q--Tya8"
                    language="en"
                    region="us"
                >
                      <GoogleMap
                          mapContainerClassName="App-map"
                          center={{lat: 52.52047739093263, lng: 13.36653284549709}}
                          zoom={12}
                          version="weekly"
                          on
                      ></GoogleMap>
                </LoadScript>
          </div>
      );
}

function App() {
      return (
          <div className="App">
                <header className="App-header">

                      <img src={logo} className="App-logo" alt="logo"/>
                      <Map/>
                      <p>
                            Edit <code>src/App.js</code> and save to reload.
                      </p>
                      <a
                          className="App-link"
                          href="https://reactjs.org"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                            Learn Maps
                      </a>

                </header>
          </div>
      );
}

export default App;
