import React, { useEffect } from 'react';
import Button from './Button';
import axios from 'axios';

import './App.css';

function App() {
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000') // Update the URL to match your FastAPI server's address
      .then((response) => {
        console.log(response.data); // Log the data received from the backend
      });
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <>
      <Button message="increase" />
    </>
  );
}

export default App;