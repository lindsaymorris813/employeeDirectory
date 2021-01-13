import React from "react";
import SearchResults from "../components/SearchResults";

function ResultHeadings({ results }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <SearchResults results={results}/>
    </table>
  );
}

export default ResultHeadings;
