import React,{Fragment} from "react";
import "./App.css";

//components
import Inputrecord from "./Components/Inputrecord"
import Employeelist from "./Components/listrecords"
function App() {
    return (
    <Fragment>
      <div className="container">
      <Inputrecord />
      <Employeelist />
      </div>
    </Fragment>
    ); 
}
 
export default App;
