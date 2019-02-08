import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value
    });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => this.setState({ robots: users}));
  }

  render() {
    const {robots, searchField} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });
    if(!robots.length) {
      return <h2>Loading</h2>;
    }else {
      return (
        <div className="tc">
          <h2 className="f2">Robo friends</h2>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/> 
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
