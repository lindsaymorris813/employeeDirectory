import "./style.css";

function SearchField({ handleInputChange, handleFormSubmit, search }) {
  return (
    <form>
      <div className="form-group mt-4">
        <input
          onChange={handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Colleague"
          id="search"
          value={search}
        />
        <button onClick={handleFormSubmit} className="btn btn-primary mt-3" id="searchBtn">
          Search
            </button>
      </div>
    </form >
  );
}

export default SearchField;
