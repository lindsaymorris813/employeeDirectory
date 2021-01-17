import React from "react";
import SearchResults from "../components/SearchResults";

function ResultHeadings({ results, headers, sortResults }) {

  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map(({ title, width }) => (
              <th scope="col" style={{width}} className="text-center" onClick={() => {sortResults({title})}}>{title}</th>
          ))}
        </tr>
      </thead>
      <SearchResults results={results}/>
    </table>
  );
}

export default ResultHeadings;
