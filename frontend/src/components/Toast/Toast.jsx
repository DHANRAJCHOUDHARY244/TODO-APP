
import React, { useState } from 'react';

const Toast = ({ toast, error }) => {
const [display,setDisplay]=useState('block')
  const hideToast = () => {
    setTimeout(()=>{
       setDisplay('none')
    }, 2000)
    
  };

  return (
    <>
      {error ? (
        <div
          onClick={hideToast}
          className="absolute p-3 text-center text-white -translate-x-1/2 bg-red-600 shadow-2xl cursor-pointer toast rounded-xl bottom-4 left-1/2" style={{display:display}}
        >
          <p>{toast}</p>
        </div>
      ) : (
        <div
          onClick={hideToast}
          className="absolute p-3 text-center text-white -translate-x-1/2 bg-green-600 shadow-2xl cursor-pointer toast rounded-xl bottom-4 left-1/2"
          id="toast1"
        >
          <p>{toast}</p>
        </div>
      )}
    </>
  );
};

export default Toast;
