import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default function BookInfo({ book }) {
  return (
    <div>
      <h5>{book.category}</h5>
      <h2>{book.title}</h2>
      <Button variant="contained" color="primary">
        Comment
      </Button>
      <Button variant="contained" color="primary">
        Remove
      </Button>
      <Button variant="contained" color="primary">
        Edit
      </Button>
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
