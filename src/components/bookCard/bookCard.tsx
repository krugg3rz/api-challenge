import * as React from "react";
import styles from "./bookCard.module.css";
import { IBook } from "../../sample";
import bookReducer, { IBookState } from "../../reducers/bookReducer";
import FETCH_BOOKS from "../../reducers/bookReducer";
import store from "../../store/index";
import cover from "../../assets/tenor.png";

export interface IProps {
  book: IBook;
}

class BookCard extends React.Component<IProps> {
  public render() {
    return (
      <div className={styles.bookCard}>
        <header className="bookTitle">
          <h4 className={styles.bookTitle}>{this.props.book.title}</h4>
          <p className={styles.bookInfo}>{this.props.book.description}</p>
          <p className={styles.bookInfo}>{this.props.book.author}</p>
          <p className={styles.bookInfo}>{this.props.book.pageCount} pages</p>
        </header>
        <img src={this.props.book.picture} />
      </div>
    );
  }
}

export default BookCard;
