import React from 'react';
import focusText from '../scripts/focusText.js';

const CheckIn = ({click}) => (
  <div>
    <input type="text" readOnly value="Check In" 
      onFocus={focusText} onClick={click}></input>
  </div>
);

export default CheckIn;