import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

const Bookprogress = ({ progress }) => (
  <article>
    <span className="book-progress montserrat d-flex a-center j-center blue">
      <CircularProgress
        color="inherit"
        size={75}
        thickness={2}
        variant="determinate"
        value={progress}
      />
      <div className="percent d-flex f-col a-center j-center black">
        <p className="big">
          {progress}
          %
        </p>
        <p className="grey tiny">Completed</p>
      </div>
    </span>
  </article>
);

Bookprogress.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Bookprogress;
