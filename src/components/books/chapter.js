import { generateChapter } from '../../dommyData';

const Chapter = () => (
  <div>
    <p className="grey tiny uppercase">Current Chapter</p>
    <p>
      {' '}
      Chapter:
      {generateChapter()}
    </p>
    <input
      className="bg-blue white btn uppercase"
      type="submit"
      value="Update Chapter"
    />
  </div>
);

export default Chapter;
