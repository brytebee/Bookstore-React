import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
/* eslint-disable react/prop-types */
export default function BookInfo({ book }) {
  return (
    <div>
      <h5>{book.category}</h5>
      <h5>{book.title}</h5>
      <Button variant="contained">Comment</Button>
      <Button variant="contained">Remove</Button>
      <Button variant="contained">Edit</Button>
    </div>
  );
}

BookInfo.prototype = {
  book: PropTypes.array.isRequired,
};
