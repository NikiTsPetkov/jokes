import React from 'react';

const Task = ({ data }) => {
  return <div className="task">{data ? <p>{data.punchline}</p> : ''}</div>;
};

export default Task;
