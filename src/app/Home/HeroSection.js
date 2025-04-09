'use client';
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      className="container-fluid py-5"
      style={{
        background: 'linear-gradient(90deg, #f3eaff, #e9f1ff)', // Violet-ish gradient
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container d-flex flex-wrap-reverse align-items-center justify-content-between">
        {/* Left Content */}
        <div className="col-md-6">
          <h1 className="display-4 fw-bold text-dark mb-3">
            Large educational <br /> programs
          </h1>

          <p className="fw-semibold text-primary fs-5">
            Our course is rated excellent by over 42,000 people
            <span className="text-danger fs-4 ms-2">★★★★★</span>
          </p>

          <p className="text-secondary mt-3 fs-6">
            Today, more than 48,000 people have already studied at our university in various fields:
            programming, photography, marketing and management.
          </p>

          <div className="mt-4 d-flex flex-wrap gap-3">
            <button className="btn btn-danger px-4 py-2 rounded-pill fw-semibold shadow-sm">
              TRY FOR FREE
            </button>
            <button className="btn btn-outline-danger px-4 py-2 rounded-pill fw-semibold border-2">
              SEE PRICING PLANS
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-md-6 d-flex justify-content-center align-items-end mt-4 mt-md-0" style={{ height: '100%' }}>
  <Image
    src="/images/hero-girl-sofa.png"
    alt="Girl on Sofa"
    width={550}
    height={450}
    className="img-fluid"
    style={{ maxHeight: '550px', objectFit: 'contain' }}
  />
</div>

      </div>
    </section>
  );
};

export default HeroSection;
