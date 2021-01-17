import React, { Component } from "react";
import SearchField from "./SearchField";
import ResultsHeadings from "./ResultsHeadings";
import API from "../utils/API";

class SearchContainer extends Component {
  state = {
    search: "",
    results: [],
    searchResults: [],
    sortOrder: "descending",
    headers: [
      { title: "Photo", width: "20%" },
      { title: "Name", width: "30%" },
      { title: "Age", width: "10%" },
      { title: "Phone Number", width: "20%" },
      { title: "Email", width: "20%" },
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
    this.setState({ search: event.target.value });
    this.searchEmployees();
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees();

  };

  searchEmployees = () => {
    this.setState({
      searchResults: this.state.results.filter(find => {
        return Object.values(find).join("").toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      })
    })
  };

  sortResults = (title) => {
    const sortColumn = title.toLowerCase();
    const compareFx = (a, b) => {
      let compare = 0;
      if (this.state.sortOrder === "ascending") {
        this.setState({ sortOrder: "descending" });
        switch (sortColumn) {
          case "name":
            let nameA = a.name.last.toLowerCase();
            let nameB = b.name.last.toLowerCase();
            if (nameA > nameB) {
              compare = 1;
            } else if (nameA < nameB) {
              compare = -1
            }
            return compare;
          case "age":
            let ageA = a.dob.age;
            let ageB = b.dob.age;
            if (ageA > ageB) {
              compare = 1;
            } else if (ageA < ageB) {
              compare = -1;
            }
            return compare;
          case "phone number":
            let phoneA = a.phone;
            let phoneB = b.phone;
            if (phoneA > phoneB) {
              compare = 1;
            } else if (phoneA < phoneB) {
              compare = -1;
            }
            return compare;
          case "email":
            let emailA = a.email;
            let emailB = b.email;
            if (emailA > emailB) {
              compare = 1;
            } else if (emailA < emailB) {
              compare = -1;
            }
            return compare;
          default:
            return;
        }
      } else {
        this.setState({ sortOrder: "ascending" });
        switch (sortColumn) {
          case "name":
            let nameA = a.name.last.toLowerCase();
            let nameB = b.name.last.toLowerCase();
            if (nameA > nameB) {
              compare = -1;
            } else if (nameA < nameB) {
              compare = 1
            }
            return compare;
          case "age":
            let ageA = a.dob.age;
            let ageB = b.dob.age;
            if (ageA > ageB) {
              compare = -1;
            } else if (ageA < ageB) {
              compare = 1;
            }
            return compare;
          case "phone number":
            let phoneA = a.phone;
            let phoneB = b.phone;
            if (phoneA > phoneB) {
              compare = -1;
            } else if (phoneA < phoneB) {
              compare = 1;
            }
            return compare;
          case "email":
            let emailA = a.email;
            let emailB = b.email;
            if (emailA > emailB) {
              compare = -1;
            } else if (emailA < emailB) {
              compare = 1;
            }
            return compare;
          default:
            return;
        }
      }

    }
    this.setState({ searchResults: this.state.results.sort(compareFx) })
  };


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
