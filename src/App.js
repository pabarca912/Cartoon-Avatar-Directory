import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cartoons: [],
      searchField: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ cartoons: users }));
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { cartoons, searchField } = this.state;
    const filteredCartoons = cartoons.filter((cartoon) =>
      cartoon.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Cartoon Avatar Search</h1>
        <SearchBox
          placeholder="Search Cartoons"
          handleChange={this.handleChange}
        />
        <CardList cartoons={filteredCartoons} />
      </div>
    );
  }
}
export default App;
