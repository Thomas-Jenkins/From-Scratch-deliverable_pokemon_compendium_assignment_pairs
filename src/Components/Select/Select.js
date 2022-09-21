import React from 'react';

export default function Select({ typeList, setType }) {
  return (
    <div>
      <select>
        {typeList.map((aType) => (
          <option key={aType.type} value={aType.type}>{aType.type}</option> 
        ))}
      </select>
    </div>
  );
}
