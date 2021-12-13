import { bookInfo, generateProgress } from '../../dommyData';
import BookInfo from './bookInfo';
import Chapter from './chapter';
import Bookprogress from './progress';
import '../../App.css';

export default function BookCard() {
  return (
    <div>
      {bookInfo.map((book) => (
        <div key={book.id} className="card d-flex j-spa align-item-center">
          <BookInfo book={book} />
          <Bookprogress progress={generateProgress()} />
          <Chapter />
        </div>
      ))}
    </div>
  );
}
