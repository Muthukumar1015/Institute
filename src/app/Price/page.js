"use client";
import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("oneday");

  const pricingData = {
    oneday: [
      { name: "Basic", price: "$1.99", duration: "one day" },
      { name: "Advanced", price: "$12.99", duration: "one day" },
      { name: "Corporate", price: "$120", duration: "one day" },
    ],
    monthly: [
      { name: "Basic", price: "$9.99", duration: "per month" },
      { name: "Advanced", price: "$29.99", duration: "per month" },
      { name: "Corporate", price: "$199", duration: "per month" },
    ],
    annual: [
      { name: "Basic", price: "$99.99", duration: "per year" },
      { name: "Advanced", price: "$249.99", duration: "per year" },
      { name: "Corporate", price: "$999", duration: "per year" },
    ],
  };

  const features = [
    "Nunc faucibus eros nec hendrerit viverra",
    "5 Morbi quis orci nec mauris auctor",
    "27 faucibus eros nec hendrerit viverra",
    "10 Nunc faucibus eros nec hendrerit viverra",
    "3Gb Nunc faucibus eros nec hendrerit viverra",
  ];

  const cardColors = [
    { bg: "bg-primary text-white", btn: "btn-primary" },
    { bg: "bg-danger text-white", btn: "btn-danger" },
    { bg: "bg-info text-white", btn: "btn-danger" },
  ];

  const chooseUs = [
    {
      icon: "bi-lightning-fill",
      title: "Fast & Reliable",
      text: "Experience lightning-fast course delivery with 99.9% uptime.",
    },
    {
      icon: "bi-shield-lock-fill",
      title: "Secure Access",
      text: "Your data is protected with top-tier security protocols.",
    },
    {
      icon: "bi-people-fill",
      title: "Community Support",
      text: "Join thousands of learners and share your growth.",
    },
  ];

  return (
    <>
      {/* Pricing Plans Section */}
      <section className="text-center py-5 bg-white">
        <h2 className="fw-bold mb-4">Pricing plans for subscribers</h2>

        {/* Tabs */}
        <div className="d-flex justify-content-center gap-2 mb-5">
          {["oneday", "monthly", "annual"].map((tab) => (
            <button
              key={tab}
              className={`btn ${activeTab === tab ? "btn-primary" : "btn-outline-secondary"} px-4 rounded-pill`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="container">
          <div className="row justify-content-center">
            {pricingData[activeTab].map((plan, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-lg">
                  <div className={`card-header ${cardColors[index].bg} py-4`}>
                    <h5 className="text-white fw-bold">{plan.name}</h5>
                    <h3 className="text-white fw-bold">{plan.price}</h3>
                    <small className="text-white">{plan.duration}</small>
                  </div>
                  <div className="card-body text-start px-4">
                    <ul className="list-unstyled">
                      {features.map((f, i) => (
                        <li key={i} className="mb-2">✓ {f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-footer bg-white border-0 text-center pb-4">
                    <button className={`btn ${cardColors[index].btn} px-4 rounded-pill text-white`}>
                      GET THIS PLAN
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Why Choose Us?</h2>
          <div className="row">
            {chooseUs.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="p-4 shadow-sm bg-white rounded h-100">
                  <i className={`bi ${item.icon} text-primary fs-1 mb-3`}></i>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal CSS */}
      <style jsx>{`
        .card-header {
          border-top-left-radius: 0.75rem;
          border-top-right-radius: 0.75rem;
        }
        .btn-outline-secondary:hover {
          background-color: #0d6efd;
          color: white;
        }
      `}</style>
    </>
  );
}
