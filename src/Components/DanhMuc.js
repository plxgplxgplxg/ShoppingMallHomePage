import React from 'react';

function DanhMuc() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Danh mục sản phẩm</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { href: '#', img: 'https://down-vn.img.susercontent.com/file/ebc96dd642ec04dfcb63db7daa831825', alt: 'Áo nữ', title: 'Áo nữ' },
            { href: '#', img: 'https://cf.shopee.vn/file/651b3905f503228c86b20f4e7f91310f_tn', alt: 'Đầm/Váy', title: 'Đầm/Váy' },
            { href: '#', img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m35yp5n6grkrb8', alt: 'Áo nam', title: 'Áo nam' },
            { href: '#', img: 'https://juanstailor.com.vn/uploaded/Tin-Tuc/quan-au.jpg', alt: 'Quần âu', title: 'Quần âu' },
          ].map((item, index) => (
            <a key={index} href={item.href} className="nhom relative overflow-hidden rounded-lg h-64">
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover transition duration-500 nhom-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-medium">{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DanhMuc;