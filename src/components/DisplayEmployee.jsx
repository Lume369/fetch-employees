import React from 'react';

function DisplayEmployee({ employee }) {
  return (
    employee && (
      <div className='DisplayEmployee'>
        <img src={employee.image} alt={employee.character} />
        <ul>
          <li>
            <em>Name:</em> {employee.character}
          </li>
          <li> 
            <em>Quota:</em> {employee.quote}
          </li>
        </ul>
      </div>
    )
  );
}

export default DisplayEmployee;