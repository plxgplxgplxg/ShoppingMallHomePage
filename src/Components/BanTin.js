import React from 'react';

function BanTin() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Đăng ký nhận bản tin</h2>
          <p className="text-gray-300 mb-8">Nhận thông tin về sản phẩm mới, khuyến mãi đặc biệt và nhiều hơn nữa</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Email của bạn"
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition duration-300"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BanTin;