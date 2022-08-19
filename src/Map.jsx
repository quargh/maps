import {LoadScript, GoogleMap} from "@react-google-maps/api";
import {useState} from "react";
import {DayStyle} from "./DayStyle";
import {NightStyle} from "./NightStyle";

export default function Map() {

      const [mapStyle, setMapStyle] = useState([...NightStyle]);

      return (
          <div className="App">
                <LoadScript
                    id="script-loader"
                    googleMapsApiKey="AIzaSyCNReGHN6Uan9yZY4Fjh0DwKN43q--Tya8"
                    language="de"
                    region="de"
                >
                      <GoogleMap
                          options={{
                                styles: mapStyle,
                                tilt: 0,
                                zoomControl: true,
                                streetViewControl: false,
                                disableDefaultUI: true,
                                gestureHandling: 'greedy',

                          }}
                          mapContainerClassName="App-map"
                          center={{lat: 53.53, lng: 9.99}}
                          zoom={12.0}
                          tilt={0}

                          zoomControlOptions = {false}
                          version="weekly"
                          on
                      ></GoogleMap>
                </LoadScript>
          </div>
      );
}