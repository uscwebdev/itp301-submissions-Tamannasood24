import HomepageButton from './HomepageButton';
import MonthButtons from './MonthButtons';
import React, { useState } from 'react';
import OctoberButton from './OctoberButton';
import './October.css';

const OctoberPage = () => {
  return (
    <div id="October_container">
      <h1>October 2023</h1>
      <HomepageButton />
      <MonthButtons />
      <OctoberButton />
    </div>
  );
};

export default OctoberPage;
