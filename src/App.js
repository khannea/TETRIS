import React, { Component } from "react";
import "./App.scss";
import Menu from "./Menu";
import Game from "./Game";
import Options from "./Options";
import Rank from "./Rank";

class App extends Component {
  state = {
    componentToLoaded: null,
    actions: null
  };

  componentDidMount() {
    this.launchMenu();
  }

  launchGame = () => {
    this.setState({
      componentToLoaded: Game,
      actions: { launchMenu: () => this.launchMenu() }
    });
  };

  launchOptions = () => {
    this.setState({
      componentToLoaded: Options,
      actions: { launchMenu: () => this.launchMenu() }
    });
  };

  launchRank = () => {
    this.setState({
      componentToLoaded: Rank,
      actions: { launchMenu: () => this.launchMenu() }
    });
  };

  launchMenu = () => {
    this.setState({
      componentToLoaded: Menu,
      actions: {
        launchGame: () => this.launchGame(),
        launchOptions: () => this.launchOptions(),
        launchRank: () => this.launchRank()
      }
    });
  };

  render() {
    return (
      <div id="wrapper_tetris">
        {this.state.componentToLoaded !== null && (
          <this.state.componentToLoaded actions={this.state.actions} />
        )}
      </div>
    );
  }
}

export default App;
