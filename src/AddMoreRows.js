import React, { useState } from 'react';

const AddMoreRows = () => {
  const [rows, setRows] = useState([{ id: 1, Grade: '', DiscountAmount: '', DiscountPercentage: '' }]);
  const [error, setError] = useState('');

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      Grade: '',
      DiscountAmount: '',
      DiscountPercentage: ''
    };
    setRows([...rows, newRow]);
  };

  const handleChange = (e, id, fieldName) => {
    const value = e.target.value;
    const updatedRows = rows.map(row => {
      if (row.id === id) {
        return {
          ...row,
          [fieldName]: value
        };
      }
      return row;
    });
    const columnValues = updatedRows.map(row => row[fieldName]);
    if (new Set(columnValues).size !== columnValues.length) {
      setError(`Duplicate values found in column ${fieldName}`);
    } else {
      setError('');
      setRows(updatedRows);
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', rows);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Grade</th>
            <th>Discount Amount</th>
            <th>Discount Percentage</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <input
                  type="text"
                  value={row.Grade}
                  onChange={(e) => handleChange(e, row.id, 'Grade')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.DiscountAmount}
                  onChange={(e) => handleChange(e, row.id, 'DiscountAmount')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.DiscountPercentage}
                  onChange={(e) => handleChange(e, row.id, 'DiscountPercentage')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
      <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleSubmit}>Submit</button>

      </div>
    </div>
  );
};

export default AddMoreRows;
