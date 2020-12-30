import React from 'react';

const MasonryLayout = props => {
  const columnWrapper = {};
  const result = [];

  // create columns
  for (let i = 0; i < props.columns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  props.children.forEach((item, index) => {
    const columnIndex = index % props.columns;
    columnWrapper[`column${columnIndex}`].push(
      // eslint-disable-next-line react/no-array-index-key
      <div style={{ marginBottom: `${props.gap}px` }} key={index}>
        {item}
      </div>,
    );
  });

  for (let i = 0; i < props.columns; i++) {
    result.push(
      <div
        style={{
          marginLeft: `${i > 0 ? props.gap : 0}px`,
          flex: 1,
        }}
        key={i}
      >
        {columnWrapper[`column${i}`]}
      </div>,
    );
  }

  return (
    <div style={{ display: 'flex' }}>
      {result}
    </div>
  );
};

export default MasonryLayout;
