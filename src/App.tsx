import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import BookCard from "./components/bookCard/bookCard";
import SearchBar from "./components/searchBar/searchBar";

export interface IReactProps {}

export interface IReduxProps {}

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <div className="top">
              <h2>My Library</h2>
              <SearchBar />
            </div>
            <BookCard />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
