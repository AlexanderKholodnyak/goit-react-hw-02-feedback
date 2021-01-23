import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onFeedback }) => (
  <div>
    {options.map(option => (
      <button
        type="button"
        data-action={option}
        onClick={onFeedback}
        key={option}
        className={s.button}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
