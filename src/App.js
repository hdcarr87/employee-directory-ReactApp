import React, { useState, useEffect } from "react";
import API from "./utils/API";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import EmpContext from "./utils/EmpContext";
import { Container } from "reactstrap";
import "./App.css"


const App = () => {
  const [empState, setEmpState] = useState({
    employees: [],
    searchTerm: ""
  });

  function handleClick(SearchedFor) {
    setEmpState({ ...empState, searchTerm: SearchedFor });
  }

  useEffect(() => {
    API.search()
    .then(res => {
      setEmpState({ ...empState, employees: res.data.results });
  });

  return () => {
    console.log("return")
  };  
}, []);

return (
  <Container>
    <div className="App">
      <div className="jumbotron">
        <h1 className="title">Employee Directory</h1>
      </div>
      <EmpContext.Provider value={empState}>
        <div className="searchDiv">
          <SearchForm handleClick={handleClick} />
        </div>
        <div className="resultsDisplay">
          <SearchResults />
        </div>
      </EmpContext.Provider>
    </div>
  </Container>
);
}

export default App;
