import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faExchangeAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

function BoSuuTap() {
  const products = [
    {
      img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3vttwm2eo4oa5',
      alt: 'Áo sơ mi nam',
      name: 'Áo sơ mi nam nữ cao cấp',
      price: '799.000đ',
      desc: 'Mẫu mới 2023',
      discount: '-20%',
      rating: 4.5,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpvs2jexevo22c',
      alt: 'Váy ngắn',
      name: 'Váy ngắn',
      price: '299.000đ',
      desc: 'Vải tuyết hàn',
      discount: null,
      rating: 4.0,
      stars: [faStar, faStar, faStar, faStar, faStarRegular],
    },
    {
      img: 'https://img.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2024/03/cach-chon-size-quan-tay-nam-2-jpg-1709717857-06032024163737.jpg',
      alt: 'Quần âu nam',
      name: 'Quần âu nam cao cấp',
      price: '899.000đ',
      desc: 'Kiểu dáng slim-fit',
      discount: null,
      rating: 5.0,
      stars: [faStar, faStar, faStar, faStar, faStar],
    },
    {
      img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m4amnnqy5cy75d',
      alt: 'Áo blazer nữ',
      name: 'Áo blazer nữ dáng ngắn',
      price: '1.199.000đ',
      desc: 'Phong cách Hàn Quốc',
      discount: 'Mới',
      rating: 5.0,
      stars: [faStar, faStar, faStar, faStar, faStar],
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Bộ sưu tập nổi bật</h2>
          <p className="max-w-2xl mx-auto text-gray-600">Những thiết kế độc quyền chỉ có tại PLXG</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="sanPham nhom relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="relative overflow-hidden">
                <img src={product.img} alt={product.alt} className="w-full h-80 object-cover" />
                <div className="nenSanPham absolute inset-0 bg-black bg-opacity-70 opacity-0 flex items-center justify-center transition duration-500 transform translate-y-4">
                  <div className="text-center p-4">
                    <button className="bg-white text-black px-6 py-2 rounded-full font-medium mb-3 hover:bg-gray-100">
                      Xem nhanh
                    </button>
                    <div className="flex justify-center space-x-3">
                      <button className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                      <button className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faExchangeAlt} />
                      </button>
                      <button className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faShoppingBag} />
                      </button>
                    </div>
                  </div>
                </div>
                {product.discount && (
                  <div className={`absolute top-3 left-3 ${product.discount === 'Mới' ? 'bg-black' : 'bg-red-500'} text-white text-xs font-bold px-2 py-1 rounded`}>
                    {product.discount}
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-900 nhom-hover:text-black">{product.name}</h3>
                  <div className="flex items-center">
                    <div className="text-gray-900 font-medium">{product.price}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{product.desc}</p>
                <div className="mt-3 flex items-center space-x-1">
                  {product.stars.map((star, i) => (
                    <FontAwesomeIcon key={i} icon={star} className="text-yellow-400" />
                  ))}
                  <span className="text-xs text-gray-500">({product.rating})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border-2 border-black px-8 py-3 font-medium hover:bg-black hover:text-white transition duration-300">
            Xem tất cả sản phẩm
          </button>
        </div>
      </div>
    </section>
  );
}

export default BoSuuTap;