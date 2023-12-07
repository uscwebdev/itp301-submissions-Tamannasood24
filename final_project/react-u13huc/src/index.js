import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import MonthButtons from './MonthButtons';
import AugustPage from './AugustPage';
import OctoberPage from './OctoberPage';
import NovemberPostcard from './NovemberPostcard';

const RootComponent = () => (
  <Router>
    <Routes>
      <Route path="/month" element={<MonthButtons />} />
      <Route path="/august" element={<AugustPage />} />
      <Route path="/october" element={<OctoberPage />} />
      <Route path="/november" element={<NovemberPostcard />} />
      <Route
        path="/"
        element={
          <div id="container">
            <h1>Tamanna's Senior Year!</h1>
            <MonthButtons />
            <p id="intro">
              Hi everyone! I'm Tamanna, a current senior studying Journalism and
              minoring in Documentary filmmaking and specializing in Web
              Development at USC! Welcome to my online time capsule where I will
              share and highlight some of my favorite and not so favorite
              moments from my last year in college! Quite honestly, I'm very sad
              that this is my last year in school because I started college
              during the pandemic and never got the traditional college
              experience. I hope by spotlighting and reminscing all of the good
              (and maybe some of the bad) times I have had this past semester, I
              can cherish all the memories I did have the pleasure of making!
            </p>

            <img
              id="big_first_pic"
              src="https://i.postimg.cc/mgPg9Yts/IMG-2510.jpg"
              alt="This is a picture of Tamanna and friends on Halloween."
            />
            <p id="ps">(It's me, Tamanna, in the middle!^^)</p>
            <div id="button_container"></div>

            <a
              href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:6f7504ae-236e-3a07-b95a-504c57c01e48"
              target="blank"
            >
              <p> Project Summary!</p>
            </a>
          </div>
        }
      />
    </Routes>
  </Router>
);
const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
