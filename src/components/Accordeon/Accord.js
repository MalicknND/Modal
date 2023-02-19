import React, { useEffect, useState, useRef } from 'react';
import './Accord.css';
import Chevron from './Chevron.png';

const Accord = () => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const toggleState = () => {
    setToggle(!toggle);
  };

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    <div className="accord">
      <div onClick={toggleState} className="accord-visible">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <img src={Chevron} alt="chevron-down" />
      </div>
      <div
        ref={refHeight}
        className={toggle ? 'accord-toggle animated' : 'accord-toggle'}
        style={{ height: toggle ? `${heightEl}` : '0px' }}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          veniam fuga culpa corporis aspernatur ipsum perspiciatis, officia iure
          voluptas voluptatum nemo ipsam quae beatae ex ad aperiam sunt
          explicabo error!
        </p>
      </div>
    </div>
  );
};

export default Accord;
