import React from 'react';
import AugustButtons from './AugustButtons';
import HomepageButton from './HomepageButton';
import MonthButtons from './MonthButtons';
import './AugustPage.css';
const AugustPage = () => (
  <div id="Aug_Sept">
    <h1>August & September 2023</h1>
    <HomepageButton />
    <MonthButtons />
    <p id="aug_intro">
      August and September marks 'Back to School' season! During these months, I
      enjoyed football games, seeing friends I hadn't seen all summer, and
      getting used to being back in school!
    </p>
    <AugustButtons />
  </div>
);

export default AugustPage;
