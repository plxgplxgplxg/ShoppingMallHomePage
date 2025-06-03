import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

function DanhGia() {
  const reviews = [
    {
      img: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'Nguyễn Thị Hồng',
      text: 'Sản phẩm chất lượng tốt, thiết kế tinh tế. Dịch vụ giao hàng nhanh và chuyên nghiệp. Tôi rất hài lòng!',
      rating: 5,
      stars: [faStar, faStar, faStar, faStar, faStar],
    },
    {
      img: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'Nguyễn Thị Hồng',
      text: 'Sản phẩm chất lượng tốt, thiết kế tinh tế. Dịch vụ giao hàng nhanh và chuyên nghiệp. Tôi rất hài lòng!',
      rating: 4.5,
      stars: [faStar, faStar, faStar, faStar, faStarHalfAlt],
    },
    {
      img: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'Nguyễn Thị Hồng',
      text: 'Sản phẩm chất lượng tốt, thiết kế tinh tế. Dịch vụ giao hàng nhanh và chuyên nghiệp. Tôi rất hài lòng!',
      rating: 4,
      stars: [faStar, faStar, faStar, faStar, faStarRegular],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Đánh giá của khách hàng</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img src={review.img} alt="Khách hàng" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium">{review.name}</h4>
                  <div className="flex text-yellow-400">
                    {review.stars.map((star, i) => (
                      <FontAwesomeIcon key={i} icon={star} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DanhGia;