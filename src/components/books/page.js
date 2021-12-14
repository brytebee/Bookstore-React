import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Categories from '../categories/Category';
import '../../App.css';
import Book from './book';

const Page = () => (
  <Router>
    <nav className="bg-white blue d-flex j-spa align-item-center">
      <div className="d-flex j-spa align-item-center">
        <h1 id="logo">Bookstore CMS</h1>
        <ul className="d-flex j-spa nav-list grey">
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </div>
      <AccountCircleIcon className="icon" />
    </nav>

    <Routes>
      <Route path="/categories" element={<Categories />} />
      <Route exact path="/" element={<Book />} />
    </Routes>
  </Router>
);

export default Page;
