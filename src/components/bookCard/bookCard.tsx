import * as React from "react";
import styles from "./bookCard.module.css";
import { IBook } from "../../reducers/bookReducer";

export interface IProps {}

class BookCard extends React.Component<IBook> {
  public render() {
    return (
      <div className={styles.bookCard}>
        <header className="bookTitle">
          <h4 className={styles.bookTitle}>{this.props.volumeInfo.title}</h4>
          <p className={styles.bookInfo}>{this.props.volumeInfo.description}</p>
          <p className={styles.bookInfo}>{this.props.volumeInfo.}</p>
          <p className={styles.bookInfo}>{this.props.volumeInfo.pageCount} pages</p>
        </header>
        <img src={this.props.volumeInfo.imageLinks.thumbnail} />
      </div>
    );
  }
}

const mapStateToProps = (state: IStore, props: IReactProps) => {
  return {
    searchText: state.general.searchText,
    cards: state.cards.cards
  };
};

const mapDispatchToProps = { setSearchText, fetchCards };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTrumpContainer);
