import { Button } from '@mui/material';
import { generateChapter } from '../../dommyData';

const Chapter = () => (
  <div>
    <p>Current Chapter</p>
    <h2>
      {' '}
      Chapter:
      {generateChapter()}
    </h2>
    <Button variant="contained">Update Chapter</Button>
  </div>
);

export default Chapter;
