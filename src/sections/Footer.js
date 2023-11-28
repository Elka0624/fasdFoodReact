import React from 'react';
import './styles/Footer.css';
import logo from '../images/logo.svg';
import insta from '../images/Group 500.svg'

const Footer = () => {
  return (
    <div style={{background: 'rgb(18 23 28)'}}>
      <div className="container footer">
        <div className="footer__left">
          <div className="logo">
          <img src={logo} alt="" />
          <span className='footer__logo'>Base</span>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="footer__right">
          <div className="footer_card">
            <h4>Customers</h4>
            <p>Buyer</p>
            <p>Supplier</p>
          </div>
          <div className="footer_card">
          <h4>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>
          <div className="footer_card">
          <h4>Futher Information</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Police</p>
          </div>
          <div className="footer_card">
            <h4>Follow Us</h4>
            <input className='footer__input' placeholder='email adderss' type="text" name="" id="" />
            <img src={insta} alt="" className='insta' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
