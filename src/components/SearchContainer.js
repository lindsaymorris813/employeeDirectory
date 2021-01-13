import React, { Component } from "react";
import SearchField from "./SearchField";
import SearchResults from "./SearchResults";
import API from "../utils/API";

class SearchContainer extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    API.search();
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ search : event.target.value })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
    console.log(this.results)
  };

  render() {
    return (
      <div>
        <SearchField
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}

export default SearchContainer;
