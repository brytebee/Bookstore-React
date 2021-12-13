import { bookInfo, generateProgress } from '../../dommyData';
import BookInfo from './bookInfo';
import Chapter from './chapter';
import Bookprogress from './progress';

export default function BookCard() {
  return (
    <div>
      {bookInfo.map((book) => (
        <div key={book.id}>
          <BookInfo book={book} />
          <Bookprogress progress={generateProgress()} />
          <Chapter />
        </div>
      ))}
    </div>
  );
}
