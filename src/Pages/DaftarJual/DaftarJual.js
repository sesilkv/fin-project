import React from 'react';
import ProfileSeller from '../../Components/Seller/ProfileSeller/ProfileSeller';
import SellerCategory from '../../Components/Seller/SellerCategory/SellerCategory';
import SliderSeller from '../../Components/Seller/SliderSeller/SliderSeller';

const DaftarJual = () => {
  return (
    <div className="container mt-3">
    <section className="d-flex seller_header">
      <div className=" d-lg-none">
        <img src="/SVG/menu.svg" alt="menu icon" className=" seller_menu" />
      </div>
      <h2>Daftar Jual Saya</h2>
    </section>
    <section>
      <ProfileSeller />
    </section>
    <section className="swiper_section container d-md-none">
      <SliderSeller />
    </section>
    <section className=" main_container row">
      <div className="d-none d-lg-block col-lg-3">
        <SellerCategory />
      </div>
      {/* <div className="col-lg-9 card_group_container">
        <CardGroup />
      </div> */}
    </section>
  </div>
  )
}

export default DaftarJual