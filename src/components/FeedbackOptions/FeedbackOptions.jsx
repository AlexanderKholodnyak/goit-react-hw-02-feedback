import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onFeedback }) => (
  <div>
    {options.map(option => (
      <button
        type="button"
        data-action={option}
        onClick={onFeedback}
        key={option}
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
