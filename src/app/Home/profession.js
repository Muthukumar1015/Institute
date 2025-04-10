"use client";
import React from "react";
import Image from "next/image";

const Profession = () => {
  return (
    <section
      className="container-fluid py-5 pt-md-5 pt-4"
      style={{
        background:
          "linear-gradient(90deg, rgb(219, 198, 248), rgb(217, 230, 253))",
        minHeight: "85vh", // Reduced from 100vh to 85vh
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container d-flex flex-wrap align-items-center justify-content-between">
        {/* Left Side - Image */}
        <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
          <Image
            src="/images/hero-animated.png"
            alt="Hero Illustration"
            width={550}
            height={500}
            className="img-fluid"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Right Side - Content */}
        <div className="col-md-6">
          <h1 className="fw-bold display-5 text-dark mb-4">
            Learn and get a <br /> profession online
          </h1>
          <p className="text-secondary mb-4 fs-6">
            Morbi tempor eleifend condimentum. Etiam mollis urna et massa tempus
            vulputate. Nunc sed nisl est. Donec non consectetur elit. Praesent
            accumsan elit urna, eget mattis turpis aliquam a. In sagittis
            bibendum consequat.
          </p>
          <button
            className="btn px-4 py-2 rounded-pill fw-semibold border-0"
            style={{
              background: "linear-gradient(to right, #ff416c, #ff4b2b)",
              color: "white",
            }}
          >
            TRY FOR FREE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profession;
