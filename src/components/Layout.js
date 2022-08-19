import '../App.css';
export default function Layout({children}) {
//Erste div kriegt das Grid
      //h1 bekommt 10%
//Zweite div bekommt 90%


      return (
          <div className={"GridContainer"} >
                <h1 className={"ActionChild"}>Hello World!</h1>
                <div className={"MapChild"}>
                      {children}
                </div>
          </div>
      );
}