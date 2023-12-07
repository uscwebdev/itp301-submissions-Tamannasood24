import React from 'react';

const Postcard = ({ imageSrc, altText, description, date }) => (
  <div className="Postcard">
    <h3> {date} </h3>
    <img src={imageSrc} alt={altText} />
    <p> {description} </p>
  </div>
);

export default Postcard;
