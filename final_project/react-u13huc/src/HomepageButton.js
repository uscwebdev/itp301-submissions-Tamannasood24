import React from 'react';
import { Link } from 'react-router-dom';

export default function HomepageButton() {
  return (
    <Link to="/">
      <button id="homepage">Homepage</button>
    </Link>
  );
}
