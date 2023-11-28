import React from 'react';
import './styles/Testimonial.css';
import group1 from '../images/Group1.svg';
import group2 from '../images/Group2.svg';
import group3 from '../images/Group3.svg';
import group4 from '../images/Group4.svg';
import group5 from '../images/Group5.svg';
import group6 from '../images/Group6.svg';

const Testimonial = () => {
  return (
    <div className='container'>
      <div className="testimonial">
        <p>Lorem ipsum dolor sit amet</p>
        <h1>The Loudest Noise Comes From The Electric Saas.</h1>
        <p className='textt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        <div className="testimonial__cards">
          <div className="testimonial__card">
            <img src={group1} alt="" />
            <h3 className='testimonial__card__title'>Responsive Layout </h3>
            <p className='testimonial__card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div className="testimonial__card">
            <img src={group2} alt="" />
            <h3 className='testimonial__card__title'>Responsive Layout </h3>
            <p className='testimonial__card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div className="testimonial__card">
            <img src={group3} alt="" />
            <h3 className='testimonial__card__title'>Responsive Layout </h3>
            <p className='testimonial__card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div className="testimonial__card">
            <img src={group4} alt="" />
            <h3 className='testimonial__card__title'>Responsive Layout </h3>
            <p className='testimonial__card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div className="testimonial__card">
            <img src={group5} alt="" />
            <h3 className='testimonial__card__title'>Responsive Layout </h3>
            <p className='testimonial__card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div className="testimonial__card">
            <img src={group6} alt="" />
            <h3 className='testimonial__card__title'>Responsive Layout </h3>
            <p className='testimonial__card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
