import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../../redux/books/book';

export default function Form() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };
    if (title !== '' && category !== 'Choose category') {
      dispatch(addNewBook(newBook));
      setTitle('');
      setCategory('Choose category');
    }
  };

  return (
    <div className="margin form">
      <h3 className="form-title grey montserrat uppercase">Add a book</h3>
      <form className="d-flex j-s-btw">
        <input
          type="text"
          className="form-input width50 montserrat"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <div className="cat-input d-flex width50">
          <select
            name="category"
            className="left-cat form-input montserrat width50"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option defaultValue="Choose category">Choose category</option>
            <option value="Movies">Movies</option>
            <option value="Music">Music</option>
            <option value="Programming">Programming</option>
            <option value="Fiction">Fiction</option>
            <option value="Science fiction">Science fiction</option>
            <option value="Finance">Finance</option>
            <option value="Personal Development">Personal Development</option>
          </select>
          <input
            className="bg-blue white btn uppercase add"
            type="submit"
            value="Add book"
            onClick={submitBookToStore}
          />
        </div>
      </form>
    </div>
  );
}
