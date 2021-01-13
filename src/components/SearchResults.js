import React from "react";

function ResultList({ results }) {
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
    </table>
  );
}

export default ResultList;
