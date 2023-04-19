import React from 'react';

export default function CustomButton({text , onClick}) {
  return (
   <button onClick={onClick}>{text}</button>
  );
}
