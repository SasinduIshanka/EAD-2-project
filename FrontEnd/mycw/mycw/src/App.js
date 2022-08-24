import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TableComponent from "./Components/TableComponent";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import CreateStudentComponent from "./Components/CreateStudentComponent";
import ViewStudentComponent from "./Components/ViewStudentComponent";



function App() {
  return (
    <div >
      <Router>
        <div >
        <HeaderComponent />
        </div>
       
        <div className="container">
          <Switch>
                          <Route path = "/" exact component = {TableComponent}></Route>
                          <Route path = "/students" component = {TableComponent}></Route>
                          <Route path = "/add-student/:id" component = {CreateStudentComponent}></Route>
                          <Route path = "/view-student/:id" component = {ViewStudentComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    
    </div>
  );
}

export default App;
