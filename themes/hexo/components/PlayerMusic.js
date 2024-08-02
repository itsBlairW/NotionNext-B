import React from 'react';

const SimplePlayer = () => {
  return (
    <div>
      <audio controls loop>
        <source src="/mp3/111.m4a" type="audio/mp4" />
        Your broswer don't support audio。
      </audio>
    </div>
  );
};

export default SimplePlayer;
