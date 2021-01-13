import React from "react";

function SearchField({ handleInputChange, handleFormSubmit, search }) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Colleague"
          id="search"
          value={search}
        />
        <button onClick={handleFormSubmit} className="btn btn-primary mt-3">
          Search
            </button>
      </div>
    </form >
  );
}

export default SearchField;
