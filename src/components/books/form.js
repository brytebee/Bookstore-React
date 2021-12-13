export default function Form() {
  return (
    <div className="form-top page-main-margin">
      <h2 className="montseratt form-title my-grey">Add a book</h2>
      <form>
        <input
          type="text"
          className="title form-input"
          placeholder="Book title"
          required
        />
        <div className="opt-btn">
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
          <input className="submit" type="submit" value="Add book" />
        </div>
      </form>
    </div>
  );
}
