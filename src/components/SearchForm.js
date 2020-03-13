import React from "react";
import "./style.css"

function SearchForm({ handleClick }) {
    return (
        <div>
            <h2>Search Employees</h2>
            <form>
                <div className="input-group">
                    <input
                    type="text"
                    className="form-control"
                    id="inputFields"
                    placeholder="Heather Carr"
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="searchbtn"
                            onClick={event => {
                                let SearchedFor = event.target.parentNode.previousElementSibling.value;
                                handleClick(SearchedFor);
                            }}
                            >Search</button>
                    </div>
                </div>
                <small id="searchHelp" className="form-text text-muted">Search for Employees</small>
            </form>
        </div>
    );
}

export default SearchForm;