import React from 'react';
import Header from './Header';
import Hero from './Hero';
import DanhMuc from './DanhMuc';
import BoSuuTap from './BoSuuTap';
import Banner from './Banner';
import DanhGia from './DanhGia';
import BanTin from './BanTin';
import Footer from './Footer';

function Homepage() {
  return (
    <div className="font-sans bg-gray-50">
      <Header />
      <Hero />
      <DanhMuc />
      <BoSuuTap />
      <Banner />
      <DanhGia />
      <BanTin />
      <Footer />
    </div>
  );
}

export default Homepage;