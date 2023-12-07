import React from 'react';
import Postcard from './Postcard';
import './NovemberPostcard.css';
import HomepageButton from './HomepageButton';
import MonthButtons from './MonthButtons';

const NovemberPostcard = () => {
  const postcards = [
    {
      date: 'November 3rd, 2023',
      imageSrc: 'https://i.postimg.cc/fWVQz0f9/IMG-4477-2.jpg',
      imageAlt: 'This is an image of Tamanna and her friend.',
      description:
        'On November 3rd, my club SCIA hosted our very first annual Diwali Party in Downtown! My bestfriend Rumaisa and I danced the night away and had a whole lot of fun with our friends.',
    },
    {
      date: 'November 12th, 2023',
      imageSrc: 'https://i.postimg.cc/vBx50z5y/IMG-2724.jpg',
      imageAlt: 'This is an image of Tamanna and her boyfriend.',
      description:
        'On November 12rd, my family hosted our own Diwali event! My entire family came and we ate alot of good food, had a alot of fun family time, played Diwali games, and lit sparklers. My boyfriend also came to my hometown to celebrate.',
    },
    {
      date: 'November 15th, 2023',
      imageSrc: 'https://i.postimg.cc/7PndzjDK/IMG-2762.jpg',
      imageAlt: 'This is an image of Tamanna and her friend.',
      description:
        "On November 15th, I celebrated my friend Mauricio's 22nd birthday at the 901! Mauricio and I have been friends since the first week of school! It's crazy how much we have seen each other grown and change over the years! ",
    },
    {
      date: 'November 17th, 2023',
      imageSrc: 'https://i.postimg.cc/ydQ94Vcf/IMG-2791.jpg',
      imageAlt: 'This is an image of Tamanna and her brother.',
      description:
        "On November 17th, my twin brother came  from Chapman University to visit me! It's not really too long of a drive, but we rarely get to see each other during the school year. It was nice to catch up with him and hang out at USC!",
    },
  ];
  return (
    <div id="postcard_container">
      <div id="November_Intro">
        <h1>November 2023</h1>
        <HomepageButton />
         <MonthButtons />
        <h4>
          November 2023 has been really quick moving month! This month I
          celebrated Diwali (the biggest Hindu Festival of the Year!), played
          with Ozzie, and hung out with my friends!
        </h4>
      </div>
      <div className="postcard-grid">
        {postcards.map((postcard, index) => (
          <Postcard
            key={index}
            imageSrc={postcard.imageSrc}
            imageAlt={postcard.imageAlt}
            description={postcard.description}
            date={postcard.date}
            className="Postcard"
          />
        ))}
      </div>
    </div>
  );
};

export default NovemberPostcard;
