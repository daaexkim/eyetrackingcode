import React, { useEffect, useRef } from 'react';
import "../App.css";

const Game1 = () => {
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
        <div>
            <h1>허허</h1>
         <div ref={mouseCursorRef} className="cursor"></div>
        </div>
      );  
    };
    
export default Game1;