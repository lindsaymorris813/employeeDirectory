import React, { Component } from "react";
import SearchField from "./SearchField";
import SearchResults from "./SearchResults";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.searchAPI("");
  }

  searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
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

export default SearchResultContainer;
