import React, { useState } from 'react';
import './October.css';

export default function OctoberButton() {
  const [displayIndex, setDisplayIndex] = useState(0);

  function handleIndexChange(index) {
    setDisplayIndex(index);
  }

  return (
    <div id="contain">
      <div id="October_intro">
        <p>
          October was an overall great month where I felt the spooky vibes and
          finally started ingratiating myself back into school!{' '}
        </p>
      </div>

      <div className="oct_captions">
        <TextBox
          isActive={displayIndex == 0}
          index={0}
          parentIndexHandler={handleIndexChange}
          title="October 9th, 2023 [click me!]"
          content="Puppy Party on the Village Lawn! This day was the
            first time we took out Ozzie to socialize with other puppies at USC!
            We all had a great time seeing all the dogs play with each other!"
          imageSrc="https://i.postimg.cc/fbbVVF1T/IMG-2086.jpg"
          imageAlt="This is an image of three dogs."
        />
      </div>

      <div className="oct_captions">
        <TextBox
          isActive={displayIndex == 0}
          index={0}
          parentIndexHandler={handleIndexChange}
          title="October 20th, 2023 [click me!]"
          content="My family and I attended my cousin's 'Haldi' (Turmeric) cermony in Cancun! In this ceremony, the bride and groom are adorned with a turmeric paste by their family members to bless them for their wedding. Turmeric is believed to also have naturally skin brightening effects and it is said this ritual is done so both the bride and groom can look their best on their wedding day! Guests are encouraged to wear yellow!"
          imageSrc="https://i.postimg.cc/t4Xg5dGb/IMG-2169.jpg"
          imageAlt="This is an image of Tamanna and her family."
        />
      </div>

      <div className="oct_captions">
        <TextBox
          isActive={displayIndex == 0}
          index={0}
          parentIndexHandler={handleIndexChange}
          title="October 21st, 2023 [click me!]"
          content="Attended my cousin's wedding in Mexico! It was
            such a fun week and I had a great time seeing all of my family
            together after a long time!"
          imageSrc="https://i.postimg.cc/qqpsZQzt/IMG-2297.jpg"
          imageAlt="This is an image of an Indian wedding."
        />
      </div>

      <div className="oct_captions">
        <TextBox
          isActive={displayIndex == 0}
          index={0}
          parentIndexHandler={handleIndexChange}
          title="October 31st, 2023 [click me!]"
          content="On Halloween, my besties and I went to WeHo for the night! It was my first time in the area! We had a great time!"
          imageSrc="https://i.postimg.cc/prZwXFGQ/IMG-2518.jpg"
          imageAlt="This is an image of Tamanna and her friends on Halloween."
        />
      </div>
    </div>
  );
}

function TextBox(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div>
      <h3
        className="title"
        onClick={() => {
          props.parentIndexHandler(props.index);
          setIsCollapsed(!isCollapsed);
        }}
      >
        {props.title}
      </h3>

      {!isCollapsed && (
        <div>
          <img src={props.imageSrc} alt={props.imageAlt} />
          <p> {props.content}</p>
        </div>
      )}
    </div>
  );
}
