import React, { useState } from 'react';

export default function AugustButtons(props) {
  const [src, setSrc] = useState('https://i.postimg.cc/9fWR7R5t/IMG-1547.jpg');

  const [alt, setAlt] = useState(
    'This is a selfie of a group of people at dinner. '
  );

  const [caption, setCaption] = useState(
    'This picture was taken on August, 19th 2023! The Saturday before school started. My hometown friends came to visit me on campus and say our goodbyes before school started. We went to Bacari, which is a iconic restaurant near the USC area!'
  );

  function handleImageChange(newSrc, newAlt, newCaption) {
    console.log('ButtonClicked');
    setSrc(newSrc);
    setAlt(newAlt);
    setCaption(newCaption);
  }

  return (
    <div id="button_container">
      <button
        id="one"
        onClick={() => {
          handleImageChange(
            'https://i.postimg.cc/9fWR7R5t/IMG-1547.jpg',
            'This is an image of people at dinner.',
            'This picture was taken on August, 19th 2023! The Saturday before school started. My hometown friends came to visit me on campus and say our goodbyes before school started. We went to Bacari, which is a iconic restaurant near the USC area!'
          );
        }}
      >
        <img
          src="https://i.postimg.cc/9fWR7R5t/IMG-1547.jpg"
          alt="This is an image of people at dinner"
        />
      </button>
      <button
        id="two"
        onClick={() => {
          handleImageChange(
            'https://i.postimg.cc/HnKX0p4W/IMG-1757.jpg',
            'This is a group image of people near a fountain.',
            'On Sept. 8th, I met all the new recuits of the club I am currently the president of SCIA (Southern California Indo-Americans)! This day was really special because it marked a new beginning in my journey at USC!'
          );
        }}
      >
        <img
          src="https://i.postimg.cc/HnKX0p4W/IMG-1757.jpg"
          alt="This is a group image of people near a fountain."
        />
      </button>
      <button
        id="three"
        onClick={() => {
          handleImageChange(
            'https://i.postimg.cc/Fsynr89d/IMG-5645.jpg',
            'This is an image of Tamanna and a puppy.',
            "On August 24th, 2023, I met Ozzie! Ozzie is my friend, Carlos', puppy who I have the pleasure of hanging out with everyday! Its so fun to look at these images and see how much Oz has grown over the couple months!"
          );
        }}
      >
        <img
          src="https://i.postimg.cc/Fsynr89d/IMG-5645.jpg"
          alt="This is an image of Tamanna and a puppy."
        />
      </button>
      <button
        id="four"
        onClick={() => {
          handleImageChange(
            'https://i.postimg.cc/7PgN0zjj/IMG-1686.jpg',
            'This is an image of Tamanna and a friend.',
            'On Sept. 4th, my best friend Rumaisa and I tried desperately to get last minute tickets for Beyonce in LA. We did not suceed :(, but at least we got a cute picture outside SoFi stadium.'
          );
        }}
      >
        <img
          src="https://i.postimg.cc/7PgN0zjj/IMG-1686.jpg"
          alt="This is an image of Tamanna and a friend."
        />{' '}
      </button>
      <button
        id="five"
        onClick={() => {
          handleImageChange(
            'https://i.postimg.cc/ydxwWPfq/IMG-1811.jpg',
            'his is an image of Tamanna and her boyfriend.',
            "On Sept. 9th, my boyfriend and I went to the USC vs Stanford game at the Colosieum! I'm not too much of a football girl but I always love night games!"
          );
        }}
      >
        <img
          src="https://i.postimg.cc/ydxwWPfq/IMG-1811.jpg"
          alt="This is an image of Tamanna and her boyfriend."
        />
      </button>
      <div id="main_image">
        <img src={src} alt={alt} />
        <p id="caption">{caption}</p>
      </div>
    </div>
  );
}
