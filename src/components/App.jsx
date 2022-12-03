import React from 'react';
import ReactDOM from 'react-dom';

function App() {

  const aspectRatios = [
    '16:9',
    '32: 9',
    '4:3',
    '21:9',
  ]

  return (
    <>
      <label for="aspect-ratio">Choose an aspect ratio:</label>
      <select>
        {aspectRatios.map(ratio => <option value = {ratio}>{ratio}</option>)}
      </select>
      Here I will show graphics representing monitors and monitor sizes.
    </>
  )
}

export default App;