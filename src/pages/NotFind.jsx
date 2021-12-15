import React from 'react';
import Img404 from '../images/Img404.svg';

const NotFind = () => {
  return (
    <div className="container">
      <Img404 />
      <h1 className="text-h1 text-center">404</h1>
      <h2 className="text-h2 text-center">Page not found</h2>
      <p className="text-lg text-center">勝敗乃兵家常事，<br />大俠請重新來過。</p>
    </div>
  );
}

export default NotFind;
