import React from "react";
import SearchResults from "../components/SearchResults";
import Table from 'react-bootstrap/Table';

function ResultHeadings({ results, headers, sortResults }) {

  return (
    <Table className="table">
      <thead>
        <tr>
          {headers.map(({ title, width }) => (
              <th scope="col" style={{width}} className="text-center" onClick={() => {sortResults(title)}}>{title}</th>
          ))}
        </tr>
      </thead>
      <SearchResults results={results}/>
    </Table>
  );
}

export default ResultHeadings;
