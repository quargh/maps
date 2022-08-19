import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {LoadScript, GoogleMap} from "@react-google-maps/api";

import {DayStyle} from "./DayStyle";
import {NightStyle} from "./NightStyle";
import ActionBar from "./ActionBar"
import Layout from "./components/Layout"

import Map from "./Map.jsx";
import closeBox from "./images/close-box.png";

function App() {
      return (
          <div className="App">
                <Layout>

                            <Map />

                            <img
                                src={closeBox}
                                alt={"close"}
                                width={30}
                                height={30}
                                className={"closeBox"}

                            />


                </Layout>
          </div>
      );
}

export default App;
