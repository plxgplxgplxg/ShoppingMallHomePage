import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">PLXG</h3>
            <p className="mb-4">Thương hiệu thời trang cao cấp với những thiết kế tinh tế và chất lượng vượt trội.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="hover:text-white"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="hover:text-white"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="hover:text-white"><FontAwesomeIcon icon={faPinterest} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Thông tin</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-white">Tuyển dụng</a></li>
              <li><a href="#" className="hover:text-white">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-white">Điều khoản dịch vụ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Dịch vụ khách hàng</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Hướng dẫn mua hàng</a></li>
              <li><a href="#" className="hover:text-white">Chính sách đổi trả</a></li>
              <li><a href="#" className="hover:text-white">Chính sách bảo hành</a></li>
              <li><a href="#" className="hover:text-white">Hỏi đáp</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Liên hệ</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3" /> 123 Đường ABC, Quận 1, TP.HCM
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-3" /> 1900 1234
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" /> info@plxg.fashion
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p>© 2023 PLXG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;