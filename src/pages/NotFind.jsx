import React from 'react';
import Img404 from '../components/Img404';
import {Link} from 'react-router-dom';

const NotFind = () => {
  const [showEmoji, setShowEmoji] = React.useState(false);
  const handleEmoji = () => {
    setShowEmoji(!showEmoji);
  };
  return (
    <div className="container space-y-6">
      <Img404 className="h-[32rem] w-[32rem] mx-auto" />
      <p className="text-h1 text-center">勝敗乃兵家常事，大俠請重新來過。</p>
      <Link className="transition-all duration-100 ease-in-out bg-primary-dark 
      hover:bg-primary-md text-white hover:font-bold hover:tracking-wide hover:text-h2 py-6 px-4 text-center
      rounded-xl block w-4/12 mx-auto"
        onMouseEnter={handleEmoji}
        onMouseLeave={handleEmoji}
        to="/" >
        點我回首頁
        {showEmoji?"🤣":""}
      </Link>
    </div>
  );
}

export default NotFind;
