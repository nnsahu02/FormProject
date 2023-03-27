import React from 'react';

function ButtonDataTable(props) {
  const { buttonData } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Button Name</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {buttonData.map((data, index) => (
          <tr key={index}>
            <td>{data.buttonName}</td>
            <td>{data.currentTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ButtonDataTable;
