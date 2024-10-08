import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    { src: '/images/image1.JPG', alt: 'Image 1', placeholderSrc: '/images/placeholder.JPG' },
    { src: '/images/image2.JPG', alt: 'Image 2', placeholderSrc: '/images/placeholder.JPG' },
    { src: '/images/image3.JPG', alt: 'Image 3', placeholderSrc: '/images/placeholder.JPG' },
    { src: '/images/image4.JPG', alt: 'Image 4', placeholderSrc: '/images/placeholder.JPG' },
    { src: '/images/image5.JPG', alt: 'Image 5', placeholderSrc: '/images/placeholder.JPG' },
    { src: '/images/image6.JPG', alt: 'Image 6', placeholderSrc: '/images/placeholder.JPG' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTextClick = () => {
    alert("Kodos Received!😝");
  };

  return (
    <div className="container rounded-lg bg-white border dark:bg-hexo-black-gray dark:border-black mx-auto px-4 md:px-8 w-full">
      <div className="fixed-section transition-opacity duration-700">
        <div className="slider-container w-2xl flex flex-col items-center justify-between relative my-5 mx-auto w-full rounded-lg p-4 bg-white dark:bg-hexo-black-gray">
        <div className="slider-text text-center mb-4 text-gray-900 dark:text-dark-7">
            <span className="menu-link cursor-pointer font-bold" onClick={handleTextClick}>MOMENTS...</span>
        </div>
          <button onClick={prevSlide} className="bg-transparent border-none text-lg cursor-pointer p-0 hover:opacity-70">❮</button>
          <div className="slider flex items-center justify-center">
            <div className="slider-image-container relative overflow-hidden w-80 h-60">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                placeholderSrc={images[currentIndex].placeholderSrc}
                className="slider-image w-full h-full object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
          </div>
          <button onClick={nextSlide} className="bg-transparent border-none text-lg cursor-pointer p-0 hover:opacity-70">❯</button>
          {/* 文字框 */}
          <div className="text-box p-4 w-full bg-white dark:bg-hexo-black-gray rounded-lg">
            <h2 className="text-lg font-bold text-gray-600 dark:text-gray-300 ">Bio🥳</h2>
            <p className="text-gray-600 dark:text-gray-300">🫥If you dont like Friday, You are Subjective</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
