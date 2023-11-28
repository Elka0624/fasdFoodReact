import React, { createElement } from 'react'
import './styles/Feature.css';
import fedex from '../images/fedEx.svg';
import amazon from '../images/amazon.svg';
import fedexx from '../images/fedExx.svg';
import google from '../images/google.svg';
import microsoft from '../images/microsoft.svg';
import group from '../images/feature__top_-img.svg';
import downloadIcon from '../images/downloadIcon.svg';
import onClickIcon from '../images/onclick.svg';
import inboxBtn from '../images/Group 429.svg';
import imgOne from '../images/Group 463.svg';

const Feature = () => {
  const openCard = () => {
    const box = document.getElementById('box');
    if(box.className === 'boxTest'){
      box.style.display = 'inline-block';
    }else{
      box.classList = 'boxTest'
    }
    console.log(box);
  }
  return (
    <div className='container' id='features'>
      <div className="feature__top">
        <img src={fedex} alt="" />
        <img src={amazon} alt="" />
        <img src={fedexx} alt="" />
        <img src={google} alt="" />
        <img src={microsoft} alt="" />
      </div>
      <div className="feature__body">
        <div className="feature__body__left">
          <img src={group} alt="" width={'700px'}/>
        </div>
        <div className="feature__body__right">
          <p>Lorem ipsum dolor</p>
          <h1>Two Saas are better than one.</h1>
          <p>One of the most fundamental ways to go about that is to create a memorable e-commerce slogan.</p>
          <div className="feature__info">
            <div className="oneDiv">
              <img src={downloadIcon} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="oneDiv">
              <img src={onClickIcon} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="oneDiv">
              <img src={downloadIcon} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="feature__bottom">
        <div className="feature__bottom__left">
          <p>Lorem ipsum dolor</p>
          <h1>With a name like Saas, it has to be good.</h1>
          <div className="inbox" onClick={openCard}>
            <p>Lorem ipsum dolor sit amet consectetur?</p>
            <img src={inboxBtn} alt="" />
          </div>
          <div className="boxTest" id='box'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, nam!</p>
            </div>
          <div className="inbox">
            <p>Lorem ipsum dolor sit amet consectetur?</p>
            <img src={inboxBtn} alt="" />
          </div>
          <div className="inbox">
            <p>Lorem ipsum dolor sit amet consectetur?</p>
            <img src={inboxBtn} alt="" />
          </div>
          <div className="inbox">
            <p>Lorem ipsum dolor sit amet consectetur?</p>
            <img src={inboxBtn} alt="" />
          </div>
          <div className="inbox">
            <p>Lorem ipsum dolor sit amet consectetur?</p>
            <img src={inboxBtn} alt="" />
          </div>
          <div className="feature__btn__group">
            <button>free trial</button>
            <button>read more</button>
          </div>
        </div>
        <div className="feature__bottom__right">
          <img src={imgOne} alt="" width={'700px'} />
        </div>
      </div>
    </div>
  )
}

export default Feature
