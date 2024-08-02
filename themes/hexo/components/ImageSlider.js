import React, { useState, useEffect } from 'react';


const ImageSlider = () => {
    const images = [
      // {
      //   src: '/images/image1.jpg',
      //   alt: 'Image 1',
      //   placeholderSrc: '/images/placeholder.JPG' // 这里可以放占位图的路径
      // },
      // {
      //   src: '/images/image2.jpg',
      //   alt: 'Image 2',
      //   placeholderSrc: '/images/placeholder.JPG'
      // },
      // {
      //   src: '/images/image3.jpg',
      //   alt: 'Image 3',
      //   placeholderSrc: '/images/placeholder.JPG'
      // },
      // {
      //   src: '/images/image4.jpg',
      //   alt: 'Image 4',
      //   placeholderSrc: '/images/placeholder.JPG'
      // },
      // {
      //   src: '/images/image5.jpg',
      //   alt: 'Image 5',
      //   placeholderSrc: '/images/placeholder.JPG'
      // },
      {
        src: '/images/image6.jpg',
        alt: 'Image 6',
        placeholderSrc: '/images/placeholder.JPG'
      }
      //添加更多图片对象
    ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // 自动播放效果
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 每 3000 毫秒（3 秒）切换一次图片

    // 清除定时器
    return () => clearInterval(interval);
    }, []); // 空依赖数组，确保只在组件挂载时设置定时器

    //弹窗设置
    const handleTextClick = () => {
        alert("Kodos Received!😝"); // 使用 alert 显示文本
      };


  return (
    <div>
    <div className='fixed-section'>
      <div className='slider-container'>
      <div className='slider-text'>
         <span className='menu-link cursor-pointer' onClick={handleTextClick}>MOMENTS...</span>
      </div>
        <button onClick={prevSlide}>❮</button>
        <div className='slider'>
          <div className='slider-image-container relative overflow-hidden w-80 h-60'> {/* 设置固定大小 */}
          <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              placeholderSrc={images[currentIndex].placeholderSrc}
              className='slider-image transform transition-transform duration-300 hover:scale-110 cursor-pointer' 
              width={800} // 可以根据需要设置宽度
              height={600} // 可以根据需要设置高度
              onLoad={() => console.log('Image loaded!')} // 可选的加载回调
            />
          </div>
        </div>
        <button onClick={nextSlide}>❯</button>
      </div>
    </div>

    </div>
  );
};

export default ImageSlider;
