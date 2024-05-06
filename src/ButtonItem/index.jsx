import React from 'react';

export const ButtonItem = ({ value, img }) => {
  return (
    <button>
      {img && <img src={img}/>}
      {value}
    </button>
  );
};