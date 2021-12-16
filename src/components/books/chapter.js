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
      className="bg-blue b-radius white btn uppercase"
      type="submit"
      onClick={generateChapter}
      value="Update Chapter"
    />
  </div>
);

export default Chapter;
