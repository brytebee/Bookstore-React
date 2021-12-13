import { Button } from '@material-ui/core';

export default function Form() {
  return (
    <form className="d-flex j-spa">
      <input
        type="text"
        className="title form-input"
        placeholder="Book title"
        required
      />
      <select name="category" className="form-input" required>
        <option defaultValue="Choose category">Choose category</option>
        <option value="Movies">Movies</option>
        <option value="Music">Music</option>
        <option value="Programming">Programming</option>
        <option value="Fiction">Fiction</option>
        <option value="Science fiction">Science fiction</option>
        <option value="Finance">Finance</option>
        <option value="Personal Development">Personal Development</option>
      </select>
      <Button variant="contained" className="submit" color="primary">
        Add book
      </Button>
    </form>
  );
}
