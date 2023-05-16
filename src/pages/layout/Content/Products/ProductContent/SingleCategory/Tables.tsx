import React from 'react';
import { tables } from '../../../../../../helpers/array/array';

const Tables = () => {
  return (
    <>
      {tables.map((table) => {
        return <div>{table.name}</div>;
      })}
    </>
  );
};

export default Tables;
