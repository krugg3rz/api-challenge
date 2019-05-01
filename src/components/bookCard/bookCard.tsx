import * as React from "react";
import styles from "./bookCard.module.css";
import { IBook } from "../../reducers/bookReducer";
import bookReducer, { IBookState } from "../../reducers/bookReducer";
import FETCH_BOOKS from "../../reducers/bookReducer";
import store from "../../store/index";
import cover from "../../assets/tenor.png";

export interface IStore {
  books: IBookState;
}

export interface IReactProps {}

export interface IReduxProps {}

class BookCard extends React.Component {
  public render() {
    return (
      <div className={styles.bookCard}>
        <header className="bookTitle">
          <h3 className={styles.bookTitle}>Book Title</h3>
          <h4 className={styles.bookInfo}>Book Bio</h4>
          <h5 className={styles.bookInfo}>Author</h5>
          <h6 className={styles.bookInfo}>Number of Pages</h6>
        </header>
        <img src={cover} />
      </div>
    );
  }
}

export default BookCard;
