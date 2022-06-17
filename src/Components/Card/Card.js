import React from 'react';
import './card.css';

const Card = () => {
  return (
    <div className='container'>
      <div className="card p-2">
        <img className="card-img-top" src="https://i.pinimg.com/564x/91/9d/ad/919dad52c0f041b6442c8b452bd6111a.jpg" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">I Might Regret This</h5>
          <small className="card-text text-muted">Buku</small>
          <p className='mt-2'>Rp50.000</p>
        </div>
      </div>
    </div>
  )
}

export default Card