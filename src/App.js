import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import "./App.css";
import Menu from './Menu';

const StartButton = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    console.log('Start button clicked!');
    navigate('/menu');
  };

  return (
    <button className="button" onClick={handleStartClick}>Start</button>
  );
};

/* cursor 꾸미기 */
const AppContent = () => {
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
  //////


  return (
    <div>
      <h1 style={{ fontSize: '80px', fontFamily: 'DOSIyagiBoldface' }}>Eye - tracking</h1>
      <h2 style={{ fontSize: '40px', fontFamily: 'Sam3KRFont' }}>동체 시력 테스트</h2>
      <StartButton />
      <div ref={mouseCursorRef} className="cursor"></div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '180px' }}>
      <Router>
        <Routes>
          {/* /menu 경로에 대한 라우트 */}
          <Route path="/menu" element={<Menu />} />

          {/* 기본 라우트 */}
          <Route path="/" element={<AppContent />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
