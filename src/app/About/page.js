"use client";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure this is installed

export default function AboutUs() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const aboutCards = [
    {
      icon: "bi-bullseye",
      title: "Our Mission",
      text: "To empower learners with real-world skills through engaging online courses.",
    },
    {
      icon: "bi-person-video",
      title: "Expert Instructors",
      text: "Our courses are taught by industry professionals and leaders.",
    },
    {
      icon: "bi-globe-americas",
      title: "Global Learning",
      text: "Join a global community of learners from over 120 countries.",
    },
  ];

  return (
    <>
      {/* About Us Cards */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">About Us</h2>
          <div className="row">
            {aboutCards.map((card, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="card h-100 shadow-sm border-0 p-4">
                  <div className="mb-3">
                    <i className={`bi ${card.icon} fs-1 text-primary`}></i>
                  </div>
                  <h5 className="fw-bold mb-2">{card.title}</h5>
                  <p className="text-muted">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe + Video Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Left - Subscribe */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h4 className="fw-bold">Subscribe for Updates</h4>
              <p className="text-muted">
                Stay informed about new courses and updates.
              </p>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>

            {/* Right - YouTube Video Thumbnail */}
            <div className="col-md-6 text-center">
              <div className="position-relative video-thumbnail">
                <img
                  src="https://img.youtube.com/vi/bMknfKXIFA8/maxresdefault.jpg"
                  alt="Watch Video"
                  className="img-fluid rounded shadow video-cover"
                  style={{ cursor: "pointer" }}
                  onClick={handleShow}
                />
                <button
                  className="btn btn-danger position-absolute top-50 start-50 translate-middle rounded-circle play-btn"
                  onClick={handleShow}
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Modal */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="p-0">
          <div className="ratio ratio-16x9 zoom-effect">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1"
              title="React Course for Beginners"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>

      {/* Internal CSS */}
      <style jsx>{`
        @keyframes zoomIn {
          0% {
            transform: scale(0.7);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .zoom-effect {
          animation: zoomIn 0.6s ease-out;
        }

        .video-cover {
          transition: transform 0.3s ease;
        }

        .video-thumbnail:hover .video-cover {
          transform: scale(1.03);
        }

        .play-btn {
          width: 60px;
          height: 60px;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
