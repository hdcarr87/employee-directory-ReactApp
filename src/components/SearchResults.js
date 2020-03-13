import React, { useContext } from "react";
import EmpContext from "../utils/EmpContext";

const SearchResults = () => {
    const result = useContext(EmpContext);
  
    const alphabetical = (a, b) => {
      const nameA = a.name.first.toUpperCase();
      const nameB = b.name.first.toUpperCase();
  
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    };
  
    return (
      <div>
        <table className="table table-striped table-light">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Phone #</th>
              <th scope="col">Picture</th>
            </tr>
          </thead>
          <tbody>
            {result.searchTerm === ""
              ? result.employees.sort(alphabetical).map((item, index) => (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.name.first + " " + item.name.last}</td>
                      <td>{item.email}</td>
                      <td>{item.gender}</td>
                      <td>{item.phone}</td>
                    </tr>
                  </>
                ))
              : result.employees
                  .filter((item) => {
                    if (
                      result.searchTerm.toUpperCase() === item.name.first.toUpperCase() ||
                      result.searchTerm.toUpperCase() === item.name.last.toUpperCase() ||
                      result.searchTerm.toUpperCase() === item.name.first.toUpperCase() + " " + item.name.last.toUpperCase()
                    ) {
                      return true;
                    }
                    return false;
                  })
                  .sort(alphabetical).map((item, index) => (
                    <>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.name.first + " " + item.name.last}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                        <td>{item.phone}</td>
                      </tr>
                    </>
                  ))}
          </tbody>
        </table>
      </div>
    );
  };
export default SearchResults;