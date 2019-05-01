import * as React from "react";
import styles from "./searchBar.module.css";

export interface IProps {}

export interface IState {}

class SearchBar extends React.Component<IProps, IState> {
  public render() {
    return (
      <input className={styles.searchBar} placeholder="Search Collection" />
    );
  }
}

export default SearchBar;
