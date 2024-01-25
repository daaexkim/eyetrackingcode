import React, { useEffect, useRef } from 'react';
import { Link} from 'react-router-dom';
import Test from './components/Test'; 
import Game1 from './components/Game1'; 
import Game2 from './components/Game2'; 

const Menu = () => {
  const mouseCursorRef = useRef(null);

  useEffect(() => {
    const mouseCursor = mouseCursorRef.current;

    const cursor = (e) => {
      mouseCursor.style.left = e.pageX + "px";
      mouseCursor.style.top = e.pageY - window.scrollY + "px";
    };

    window.addEventListener("scroll", cursor);
    window.addEventListener("mousemove", cursor);

    return () => {
      window.removeEventListener("scroll", cursor);
      window.removeEventListener("mousemove", cursor);
    };
  }, []); 

  return (
    <div style={{ fontSize: '40px'}}>
      <h1 style={{ fontFamily: 'DOSIyagiBoldface', marginBottom: '-3px' }}>Choose one !</h1>
      <ul style={{ listStyleType: 'none', textAlign: 'left', display: 'inline-block' }}>
        <li className="triangle-item" style={{ fontFamily: 'DOSIyagiBoldface', marginBottom: '25px' }}>
          <Link to="/test" style={{ textDecoration: "none", cursor: 'none'}} className="link">  Eye-tracking test</Link> 
        </li>
        <li className="triangle-item" style={{ fontFamily: 'DOSIyagiBoldface', marginBottom: '25px' }}>
          <Link to="/game1" style={{ textDecoration: "none", cursor: 'none'}} className="link">  Game 1</Link> 
        </li>
        <li className="triangle-item" style={{ fontFamily: 'DOSIyagiBoldface', marginBottom: '25px' }}>
          <Link to="/game2" style={{ textDecoration: "none", cursor: 'none'}} className="link">  Game 2</Link>
        </li>
      </ul>
      <div ref={mouseCursorRef} className="cursor"></div>
    </div>
  );  
};

export default Menu;
