import React from 'react';

const SimplePlayer = () => {
  return (
    <div>
      <audio controls>
        <source src="/mp3/111.m4a" type="audio/mp4" />
        你的浏览器不支持音频标签。
      </audio>
    </div>
  );
};

export default SimplePlayer;
