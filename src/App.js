import React, { useEffect, useState } from 'react';

import Task from './components/Task';
import Answer from './components/Answer';
import './style.css';

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'https://official-joke-api.appspot.com/random_joke'
        );
        const task = await response.json();
        setData(task);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      {data ? (
        <div className="container">
          <h1>Jokes</h1>
          <Answer data={data} />
          <Task data={data} />
        </div>
      ) : (
        <div className="container">
          <h1>Loading Jokes.......</h1>
        </div>
      )}
    </>
  );
}
