import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
            <h5>Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit quia reprehenderit vero provident laudantium recusandae culpa sint fugiat voluptate!
            </small>
          </div>
        </article>
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR2} alt="" />
            <h5>Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit quia reprehenderit vero provident laudantium recusandae culpa sint fugiat voluptate!
            </small>
          </div>
        </article>
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR3} alt="" />
            <h5>Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit quia reprehenderit vero provident laudantium recusandae culpa sint fugiat voluptate!
            </small>
          </div>
        </article>
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR4} alt="" />
            <h5>Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit quia reprehenderit vero provident laudantium recusandae culpa sint fugiat voluptate!
            </small>
          </div>
        </article>
      </div>
    </section>
  );
}
