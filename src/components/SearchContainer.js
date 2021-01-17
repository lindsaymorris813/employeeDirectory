import React, { Component } from "react";
import SearchField from "./SearchField";
import ResultsHeadings from "./ResultsHeadings";
import API from "../utils/API";

class SearchContainer extends Component {
  state = {
    search: "",
    results: [],
    searchResults: [],
    headers: [
      {title: "Photo", width: "20%"},
      {title: "Name", width: "30%"},
      {title: "Age", width: "10%"},
      {title: "Phone Number", width: "20%"},
      {title: "Email", width: "20%"},
    ]
  };

  componentDidMount() {
    API.search();
    this.renderEmployees();
  }

  renderEmployees = () => {
    API.search()
      .then(res => this.setState({ results: res.data.results, searchResults: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ search : event.target.value });
    this.searchEmployees();
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees();

  };

  searchEmployees = () => {
    this.setState({ searchResults: this.state.results.filter(find => {
      return Object.values(find).join("").toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    })})
  };

  sortResults = (title) => {
    const sorted = this.state.results.sort((a, b) => {
      return a.title - b.title;
    });
    this.setState({ searchResults: sorted });
  }

  render() {
    return (
      <div>
        <SearchField
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultsHeadings 
        results={this.state.searchResults} 
        headers={this.state.headers}
        sortResults={this.sortResults}
        />
      </div>
    );
  }
}

export default SearchContainer;
