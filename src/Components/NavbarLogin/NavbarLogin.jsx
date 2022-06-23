import React from 'react';
import './navbarLogin.css';
import Home from '../../Pages/Home/Home';
import { Link } from 'react-router-dom';

import { BiListUl } from 'react-icons/bi';
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BsPerson } from 'react-icons/bs';

import { GiHamburgerMenu } from 'react-icons/gi';

const NavbarLogin = () => {
  return (
    <>
    <header id="header" className='mb-5'>
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                    <Link to='/'><img src="/images/logo.png" alt="LogoSecondHand" class="logo" /></Link>
                </div>
                <div className='col-auto'>
                    <form className="d-flex form-inline">
                        <div className="align-items-start">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                    </form>
                </div>

                <div className="menu-sm col-auto d-lg-none"><GiHamburgerMenu /></div>
                <div className="col-auto d-none d-lg-block">
                    <ul className="header-menu list-group-horizontal">
                        <li className="list-inline-item"><Link to='/list'><BiListUl /></Link></li>
                        <li className="list-inline-item"><Link to='/notification'><IoIosNotificationsOutline /></Link></li>
                        <li className="list-inline-item"><Link to='/profile'><BsPerson /></Link></li>
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

export default NavbarLogin;