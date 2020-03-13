import React from "react";

const EmpContext = React.createContext({
    employees: [],
    searchTerm: ""
});

export default EmpContext;