import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handelSelect = option => setSelection(option);

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];
  return (
    <Dropdown options={options} onChange={handelSelect} value={selection} />
  );
}

export default DropdownPage;
