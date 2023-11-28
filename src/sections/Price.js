import React from 'react'
import './styles/Price.css';
import compileteIcon from '../images/compliteIcon.svg'
import p1 from '../images/Group 341.svg';
import stre from '../images/Group 510.svg';

const Price = () => {
  return (
    <div className='container'>
      <h1 className='price__title'>Keep calm and buy</h1>
      <p className='price__text'>With lowering the price to even a slight extent one can achieve exponential growth.</p>
      <div className="price__cards">
        <div className="price__card">
          <h3>STUDENT</h3>
          <p className='lla'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          <span>$15</span>
          <div className="price__btnGroup">
            <button className='active'>Monthiy</button>
            <button className='disabled'>Annually</button>
          </div>
          <div className="price__info">
            <img src={compileteIcon} alt="" />
            <p className='price__info__text'>Consulting with experts 20 times for I yea</p>
          </div>
          <div className="price__info">
            <img src={compileteIcon} alt="" />
            <p className='price__info__text'>Add friends for free for 1month</p>
          </div>
          <div className="price__info">
            <img src={compileteIcon} alt="" />
            <p className='price__info__text'>Free 5 fonts</p>
          </div>
          <button className='priceBtn'>buy now</button>
        </div>
        <div className="price__card__black">
          <h3>PRO</h3>
          <p className='llaa'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          <span>$30</span>
          <div className="price__btnGroup">
            <button className='activee'>Monthiy</button>
            <button className='disabledd'>Annually</button>
          </div>
          <div className="price__info">
            <img src={compileteIcon} alt="" />
            <p className='price__info__text' style={{color: 'white'}}>Consulting with experts 20 times for I yea</p>
          </div>
          <div className="price__info">
            <img src={compileteIcon} alt="" />
            <p className='price__info__text' style={{color: 'white'}}>Add friends for free for 1month</p>
          </div>
          <div className="price__info">
            <img src={compileteIcon} alt="" />
            <p className='price__info__text' style={{color: 'white'}}>Free 5 fonts</p>
          </div>
          <button className='priceBtnn'>buy now</button>
        </div>
        <div className="price__card">
          <h3>COMPANY</h3>
          <p className='lla'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          <span>$70</span>
          <div className="price__btnGroup">
            <button className='active'>Monthiy</button>
            <button className='disabled'>Annually</button>
          </div>
          <div className="price__info">
            <img src={compileteIcon} alt="" />
            <p className='price__info__text'>Consulting with experts 20 times for I yea</p>
          </div>
          <div className="price__info">
            <img src={compileteIcon} alt="" />
            <p className='price__info__text'>Add friends for free for 1month</p>
          </div>
          <div className="price__info">
            <img src={compileteIcon} alt="" />
            <p className='price__info__text'>Free 5 fonts</p>
          </div>
          <button className='priceBtn'>buy now</button>
        </div>
      </div>
      {/* position absotue joyi */}
      <div className="dummy">
        <img src={stre} alt="" className='imaa'/>
        <div className="dummy__left">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aut commodi sapiente eligendi perspiciatis.</p>
        </div>
        <div className="dummy__right">
          <input type="text" name="" id="" className='int' placeholder='Enter Email Adderss'/>
          <button className='bttn'><img src={p1} alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default Price
