'use client';
import React from 'react';
import Image from 'next/image';
import './Hero.css'; // link to the CSS below

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="leftContent">
        <h1>Large educational programs</h1>
        <p>
          <span className="ratingText">
            Our course is rated excellent by over 42,000 people
          </span>
          <span className="stars">★★★★★</span>
        </p>
        <p>
          Today, more than 48,000 people have already studied at our university in various fields:
          programming, photography, marketing and management.
        </p>
        <div className="heroButtons">
          <button className="btn-primary">TRY FOR FREE</button>
          <button className="btn-secondary">SEE PRICING PLANS</button>
        </div>
      </div>

      <div className="rightGraphic">
        <Image src="/images/sofa.png" alt="Sofa" width={900} height={700} className="sofa" />
        <Image src="/images/girl.png" alt="Girl" width={500} height={600} className="girl" />
        <Image src="/images/dog.png" alt="Dog" width={100} height={80} className="dog" />
        <Image src="/images/Icon1.png" alt="Icon1" width={80} height={80} className="icon icon1" />
        <Image src="/images/Icon2.png" alt="Icon2" width={80} height={80} className="icon icon2" />
        <Image src="/images/Icon4.png" alt="Icon3" width={80} height={80} className="icon icon3" />
        <Image src="/images/Icon3.png" alt="Icon4" width={100} height={100} className="icon icon4" />
      </div>
    </section>
  );
};

export default HeroSection;
