import React from 'react';
import './earlyNavbar.css';
import { Link } from 'react-router-dom';

import { BiListUl } from 'react-icons/bi';
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BsPerson } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiLogIn } from 'react-icons/bi';

import NavbarLogin from '../NavbarLogin/NavbarLogin';

const EarlyNavbar = () => {
  return (
    <>

    <header id="header" className='mb-5'>
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                    <Link to='/'><img src="/images/logo.png" alt="LogoSecondHand" class="logo" /></Link>
                </div>
                <div className='col-auto align-items-start'>
                    <form className="d-flex form-inline">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                    </form>
                </div>

                <div className="menu-sm col-auto d-lg-none"><GiHamburgerMenu /></div>
                <div className="col-auto d-none d-lg-block">
                    <ul className="header-menu list-group-horizontal mb-0">
                        <li className="list-inline-item"><Link to='/login' class="btn login"><BiLogIn className='m-1'/>Masuk</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>

    {/* <nav class="navbar navbar-expand-lg navbar-expand-sm">
            <div class="container">
                <Link to='/'><img src='/images/logo.png' alt='LogoImage' /></Link>
                
      
                <form class="form-inline">
                    <div class="md-form my-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                </form>
        
        
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7"
                    aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="navbarSupportedContent-7">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to='/list'> <span><BiListUl /></span></Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link to='/notification' class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-7" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false"><IoIosNotificationsOutline /></Link>
                            <div class="dropdown-menu dropdown-pink" aria-labelledby="navbarDropdownMenuLink-7">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <Link to='/profile'> <span><BsPerson /></span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}
    </>
  );
};

export default EarlyNavbar;