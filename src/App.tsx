import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import BookCard from "./components/bookCard/bookCard";
import SearchBar from "./components/searchBar/searchBar";
import { IBook, book } from "./sample";

export interface IProps {
  // book: IBook;
}

class App extends Component<IProps> {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <div className="top">
              <h2>My Library</h2>
              <SearchBar />
            </div>
            <BookCard book={book[0]} />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
