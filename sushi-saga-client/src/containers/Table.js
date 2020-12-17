import React, { Fragment } from "react";

const Table = ({ cash, eaten }) => {
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return (
        <div key={x} className="empty-plate" style={{ top: -7 * index }} />
      );
    });
  };

  return (
    <Fragment>
      <h1 className="remaining">You have: ${cash} remaining!</h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(eaten)
          }
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
