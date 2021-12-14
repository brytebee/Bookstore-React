import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFromStore } from '../../redux/books/book';

export default function BookInfo({ book }) {
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(removeBookFromStore(id));
  };
  return (
    <div>
      <h5 className="grey">{book.category}</h5>
      <h2>{book.title}</h2>
      <div>
        <input
          className="submit info-btn bluish"
          type="submit"
          value="Comment"
        />
        <input
          className="submit info-btn bluish"
          type="submit"
          value="Remove"
          onClick={() => deleteHandler(book.item_id)}
        />
        <input className="submit info-btn bluish" type="submit" value="Edit" />
      </div>
    </div>
  );
}

BookInfo.propTypes = {
  book: PropTypes.objectOf(
    PropTypes.shape({
      category: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
