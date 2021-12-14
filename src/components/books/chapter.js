import { generateChapter } from '../../dommyData';

const Chapter = () => (
  <div className="chapter">
    <p className="grey tiny uppercase margin-bottom-0">Current Chapter</p>
    <p className="margin-top-0">
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
