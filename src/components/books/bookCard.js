import { useSelector } from 'react-redux';
import { generateProgress } from '../../dommyData';
import BookInfo from './bookInfo';
import Chapter from './chapter';
import Bookprogress from './progress';
import '../../App.css';

export default function BookCard() {
  const allBooks = useSelector((state) => state.bookReducer);
  return (
    <div>
      {allBooks.map((book) => (
        <div key={book.id} className="card d-flex j-spa align-item-center">
          <BookInfo book={book} />
          <Bookprogress progress={generateProgress()} />
          <Chapter />
        </div>
      ))}
    </div>
  );
}
