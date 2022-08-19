import '../App.css';
import closeBox from "../images/close-box.png";
import brightness from "../images/brightness-4.png";
export default function Layout({children}) {
//Erste div kriegt das Grid
      //h1 bekommt 10%
//Zweite div bekommt 90%


      return (
          <div className={"GridContainer"} >
                <div className={"ActionChild"}>
                      {/*      <h1 className={"AppTitle"}>X-Navigator</h1>*/}

                      <img

                          src={brightness}
                          alt={"brightness"}
                          width={30}
                          height={30}
                          className={"Brightness"}

                      />

                </div>
                <div className={"MapChild"}>
                      {children}
                </div>
          </div>
      );
}