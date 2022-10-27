import React from 'react';

const Answer = ({ data }) => {
  return <div className="answer">{data ? <p>{data.setup}</p> : ''}</div>;
};

export default Answer;
