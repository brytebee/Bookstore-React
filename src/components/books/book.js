import BookCard from './bookCard';
import Form from './form';

export default function Book() {
  return (
    <div className="pages">
      <BookCard />
      <h3>Add a book</h3>
      <Form />
    </div>
  );
}
