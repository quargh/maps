import '../App.css';
import closeBox from "../images/close-box.png";
import brightness from "../images/brightness-4.png";
import fullscreen from "../images/fullscreen.png";
import ReactDOM from "react-dom/client";

export default function Layout({children}) {
//Erste div kriegt das Grid
      //h1 bekommt 10%
//Zweite div bekommt 90%


      return (
          <div className={"GridContainer"}>
                <div className={"ActionChild"}>
                      <h1 className={"AppTitle"}>X-Navigator</h1>


                      <img

                          src={fullscreen}
                          alt={"fullscreen"}
                          width={30}
                          height={30}
                          className={"Fullscreen"}
                          onClick={(event) => {
                                fullScreen();
                          }}

                      />

                      <img

                          src={brightness}
                          alt={"brightness"}
                          width={30}
                          height={30}
                          className={"Brightness"}
                          onClick={(event) => {

                          }}

                      />

                </div>
                <div className={"MapChild"}>
                      {children}
                </div>
          </div>
      );
}

function fullScreen() {
      const root = document.getElementById('root');
      root.requestFullscreen();
}
