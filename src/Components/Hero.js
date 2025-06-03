import React, { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    const elements = document.querySelectorAll('.hieuUngVao');
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 nenHero"></div>
      <img
        src="https://bizweb.dktcdn.net/thumb/1024x1024/100/392/359/products/173110703-755492825161140-16947947.jpg?v=1620099998520"
        alt="Thời trang cao cấp"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="container mx-auto px-4 relative z-10 text-white hieuUngVao">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Mùa hè tinh tế</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-lg">Khám phá bộ sưu tập mới với những thiết kế độc đáo</p>
        <button className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition duration-300">
          Khám phá ngay
        </button>
      </div>
    </section>
  );
}

export default Hero;