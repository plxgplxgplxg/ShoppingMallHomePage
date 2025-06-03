import React from 'react';

function Banner() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-black text-white rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12">
              <h2 className="text-3xl font-bold mb-4">Giảm giá lên đến 50%</h2>
              <p className="text-gray-300 mb-6">Chương trình khuyến mãi đặc biệt trong tháng này. Mua ngay kẻo lỡ!</p>
              <button className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-200 transition duration-300">
                Mua ngay
              </button>
            </div>
            <div className="md:w-1/2 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Sale"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;