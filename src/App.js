import React from 'react';
import arrayMove from 'array-move';
import Select, { components } from 'react-select';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import './App.css';

const SortableMultiValue = SortableElement(components.MultiValue);
const SortableSelect = SortableContainer(Select);

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function App() {
  const [selected, setSelected] = React.useState([options[2]]);

  const onChange = (selectedOptions) => setSelected(selectedOptions);
  const onSortEnd = ({ oldIndex, newIndex })=> setSelected(arrayMove(selected, oldIndex, newIndex));

  return (
    <div className="App">
      <div className="Container">
        <SortableSelect
          isMulti
          options={options}
          value={selected}
          onChange={onChange}
          components={{ MultiValue: SortableMultiValue }}
          closeMenuOnSelect={false}
          axis="xy"
          onSortEnd={onSortEnd}
          distance={5}
          lockToContainerEdges={true}
          getHelperDimensions={({ node })=> node.getBoundingClientRect()}
        />
      </div>
    </div>
  );
}

export default App;
