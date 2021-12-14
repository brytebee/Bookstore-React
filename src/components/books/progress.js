import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

const Bookprogress = ({ progress }) => (
  <article>
    <span className="montserrat d-flex blue">
      <CircularProgress
        color="inherit"
        size={75}
        thickness={3}
        variant="determinate"
        value={progress}
        className="circle"
      />
      <div className="black prog-percent">
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
