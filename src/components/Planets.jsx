import React, { useState, useEffect } from 'react';

const Planets = (email, password) => {
  const [hasError] = useState(false);
  const [planets] = useState({});

  async function fetchData() {
    const res = await fetch('http://localhost:3001/auth', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({ email, password }), // data can be string or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    res
      .json()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <span>{JSON.stringify(planets)}</span>
      <hr />
      <span>
        Has error:
        {JSON.stringify(hasError)}
      </span>
    </div>
  );
};
export default Planets;
