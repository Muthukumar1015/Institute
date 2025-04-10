'use client';
import Image from 'next/image';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section position-relative py-5">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-11 position-relative">
            {/* Gradient Box */}
            <div className="gradient-box position-relative rounded-4 shadow-lg p-4 p-lg-5">
              {/* Ribbon inside top-right of gradient box */}
              <div className="ribbon-image position-absolute">
                <Image
                  src="/images/ribbon.png"
                  alt="Ribbon"
                  width={140}
                  height={80}
                />
              </div>

              <div className="row">
                {/* Left: Bullet Points */}
                <div className="col-lg-7 text-white">
                  <h2 className="fw-bold mb-4">How does it work?</h2>

                  <div className="mb-4 d-flex align-items-start">
                    <FaCheckCircle className="text-danger me-3 mt-1" size={18} />
                    <div>
                      <h5 className="fw-bold mb-1">4 on-line lectures with a teacher</h5>
                      <p className="mb-0">Quisque eget porta mauris. Praesent eu tincidunt nulla, suscipit lobortis est.</p>
                    </div>
                  </div>

                  <div className="mb-4 d-flex align-items-start">
                    <FaCheckCircle className="text-danger me-3 mt-1" size={18} />
                    <div>
                      <h5 className="fw-bold mb-1">Subscription gives access to education materials and videos</h5>
                      <p className="mb-0">Quisque eget porta mauris. Praesent eu tincidunt nulla, suscipit lobortis est.</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <FaCheckCircle className="text-danger me-3 mt-1" size={18} />
                    <div>
                      <h5 className="fw-bold mb-1">After completing the course and tasks, you’ll receive a certificate</h5>
                      <p className="mb-0">Quisque eget porta mauris. Praesent eu tincidunt nulla, suscipit lobortis est.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* White Testimonial Card */}
            <div className="testimonial-card bg-white text-center p-4 p-lg-5 rounded-4 shadow-lg position-absolute">
              <Image
                src="/images/diana.webp"
                alt="Diana Gloster"
                width={100}
                height={100}
                className="rounded-circle mb-3"
              />
              <h5 className="fw-bold mb-2">Diana Gloster</h5>
              <div className="text-danger mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
              <p className="fst-italic text-muted small mb-0">
                “Mauris tellus lorem, tempus sed nibh at, varius convallis mi. Sed scelerisque odio neque a lacus. Ut consectetur ligula. Ed rhoncus sapien eget feugiat.”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Internal CSS */}
      <style jsx>{`
        .how-it-works-section {
          background: linear-gradient(90deg, rgb(219, 198, 248), rgb(217, 230, 253));
          overflow: hidden;
        }

        .gradient-box {
          background: linear-gradient(135deg, #6d00b3, #2979ff);
          position: relative;
          padding-bottom: 120px;
        }

        .ribbon-image {
          top: -30px;
          right: -30px;
          animation: floatSideways 3s ease-in-out infinite alternate;
        }

        @keyframes floatSideways {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(20px);
          }
        }

        .testimonial-card {
          bottom: -90px;
          right: 40px;
          max-width: 360px;
        }

        @media (max-width: 768px) {
          .testimonial-card {
            position: static;
            margin-top: 2rem;
          }

          .ribbon-image {
            top: -20px;
            right: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;
