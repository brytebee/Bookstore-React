import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Categories from '../categories/Category';

const Nav = () => (
  <Router>
    <nav>
      <h1 id="logo">Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default Nav;
