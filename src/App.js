import React from 'react';
import './App.css';


import Registration from './components/Registration/Registration';
function App() {
  return (
    <div className="App">
      
          <div className="flex-grid">
            <div className="hidden-xs left-side">
              <img src="/images/slide-left.png" alt="slide" className="left-img" />;
            </div>
            <div className="right-side outer">
             <Registration />
              
            </div>
          </div>
  
    </div>
  );
}

export default App;
