import { generateChapter } from '../../dommyData';

const Chapter = () => (
  <div>
    <p className="grey">Current Chapter</p>
    <h2>
      {' '}
      Chapter:
      {generateChapter()}
    </h2>
    <input className="bg-blue white btn" type="submit" value="Update Chapter" />
  </div>
);

export default Chapter;
