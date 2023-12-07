import React from 'react';
import { Link } from 'react-router-dom';

const MonthButtons = () => (
  <div id="buttons">
    <Link to="/august">
      <button> August/September 2023</button>
    </Link>

    <Link to="/october">
      <button>October 2023</button>
    </Link>

    <Link to="/november">
      <button>November 2023</button>
    </Link>
  </div>
);

export default MonthButtons;
