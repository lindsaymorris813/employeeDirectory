import React from "react";

function ResultList({ results }) {
  return (
      <tbody>
      {results.map(result => (
        <tr>
        <th scope="row"><img src={result.picture.thumbnail} alt={result.login.uuid} className="img-fluid" /></th>
        <td>{result.name.first}</td>
        <td>{result.name.last}</td>
        <td>{result.phone}</td>
        <td>{result.email}</td>
        </tr>
      ))}
      </tbody>
  );
}

export default ResultList;
