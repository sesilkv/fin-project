import React from 'react';
import './profileSeller.css';
import '../defaultSeller.css';

const SellerProfile = () => {
  return (
    <>
        		<div className="profile_card">
			<div className="row">
				<div className="col-8 col-lg-10">
					<div className="row container">
						<div className="image_position col-3 col-lg-1"></div>
						<div className="seller_bio col-8 col-lg-auto">
							<h6 className="text_reguler">Nama Penjual</h6>
							<p className="text_footer">Kota</p>
						</div>
					</div>
				</div>
				<div className="col-3 col-lg-1 btn_container">
					<button className="btn_seller_bio text_small ">Edit</button>
				</div>
			</div>
		</div>
    </>
  )
}

export default SellerProfile