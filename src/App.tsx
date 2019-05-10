import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import BookCard from "./components/bookCard/bookCard";
import SearchBar from "./components/searchBar/searchBar";
import { IBook } from "./sample";
import { fetchBooks, IVolumeInfo } from "./reducers/bookReducer";
import { Connect } from "react-redux";

export interface IProps {
  book: IBook;
  volumeInfo: IVolumeInfo;
}

export interface IState {}

class App extends React.Component<IProps, IState> {
  public render() {
    return 
  }
}

export default Connect;
  
}
