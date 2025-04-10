"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Amanda Rendall",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Curabitur laoreet neque at magna pulvinar cursus. Nulla sed suscipit lectus. Phasellus rhoncus vulputate odio et placerat.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jason Smith",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Aenean ut aliquam erat. Integer rutrum eleifend ante, a bibendum leo tristique id. Phasellus euismod sapien non ornare sagittis.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Donec molestie eros dolor. Nulla euismod orci in varius mollis. Great experience and learning curve.",
    rating: 5,
  },
];

export default function SaleTestimonialSection() {
  return (
    <>
      {/* Season Sale Section */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(to right, #3f51b5, #7b1fa2)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <Image
                src="/images/hero-animated.png"
                alt="Sale Model"
                width={400}
                height={300}
                className="img-fluid"
              />
            </div>

            {/* Right Content */}
            <div className="col-md-6 text-white text-center text-md-start">
              <h2 className="display-4 fw-bold">
                50% <span className="fw-light">Season sale</span>
              </h2>
              <p className="mb-4">
                Unlimited access to educational materials and lectures
              </p>
              <div className="input-group w-100 w-md-75">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Subscribe by e-mail"
                />
                <button className="btn btn-danger px-4">GET STARTED NOW</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h3 className="fw-bold mb-5">What our students say</h3>
          <div className="row justify-content-center">
            {testimonials.map((student) => (
              <div key={student.id} className="col-md-4 mb-4">
                <div className="bg-white shadow-sm p-4 rounded h-100">
                  <div className="fs-1 text-muted mb-3">“</div>
                  <p className="fst-italic text-muted mb-4">{student.review}</p>
                  <div className="mb-3">
                    <Image
                      src={student.image}
                      alt={student.name}
                      width={60}
                      height={60}
                      className="rounded-circle"
                    />
                    <h6 className="fw-bold mt-2">{student.name}</h6>
                    <div className="text-warning">
                      {[...Array(student.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
