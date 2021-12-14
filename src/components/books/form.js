import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/book';

export default function Form() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setCategory('Choose category');
  };

  return (
    <form className="d-flex j-spa">
      <input
        type="text"
        className="title form-input"
        placeholder="Book title"
        onClick={(e) => setTitle(e.target.value)}
        required
      />
      <select
        name="category"
        className="form-input"
        onClick={(e) => setCategory(e.target.value)}
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
      <Button
        variant="contained"
        className="submit"
        color="primary"
        onSubmit={submitBookToStore}
      >
        Add book
      </Button>
    </form>
  );
}
