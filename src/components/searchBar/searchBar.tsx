import * as React from "react";
import styles from "./searchBar.module.css";
import { IBook } from "../../reducers/bookReducer";

export interface IProps {
  books: IBook[];
}

export interface IState {
  books: IBook[];
}

class SearchBar extends React.Component<IProps, IState> {
  public state = { books: [] };

  public render() {
    return (
      <input className={styles.searchBar} placeholder="Search Collection" />
    );
  }
}

export default SearchBar;
