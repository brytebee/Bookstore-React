import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { generateProgress } from '../../dommyData';
import BookInfo from './bookInfo';
import Chapter from './chapter';
import Bookprogress from './progress';
import '../../App.css';
import { getBooks } from '../../redux/books/book';

export default function BookCard() {
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.bookReducer);
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div>
      {allBooks.map((book) => (
        <div
          key={book.item_id}
          className="card d-flex margin j-s-btw align-item-center bg-white"
        >
          <BookInfo book={book} />
          <Bookprogress progress={generateProgress()} />
          <Chapter />
        </div>
      ))}
    </div>
  );
}

BookInfo.propTypes = {
  'book.item_id': PropTypes.string,
};
