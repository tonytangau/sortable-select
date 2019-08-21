import React from 'react';
import './App.css';

import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function App() {
  const [selected, setSelected] = React.useState([options[2]]);

  const handleChange = (selectedOptions) => setSelected(selectedOptions);

  return (
    <div className="App">
      <div className="Container">
        <Select
          isMulti
          options={options}
          value={selected}
          onChange={handleChange}
          closeMenuOnSelect={false}
        />
      </div>
    </div>
  );
}

export default App;
