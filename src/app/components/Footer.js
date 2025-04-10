"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { AiFillCamera } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row gy-4">
          {/* Logo and About */}
          <div className="col-md-3">
            <div className="d-flex align-items-center mb-3">
              <img src="/images/deva.png" alt="Edison Logo" width={40} height={40} />
              <div className="ms-2">
                <h5 className="m-0 fw-bold">Deva</h5>
                <small>courses</small>
              </div>
            </div>
            <p className="small text-muted">
              Curabitur non libero at lorem finibus lobortis. Ut auctor egestas pretium. Proin nunc
              ligula, venenatis tempor.
            </p>
            <div className="d-flex gap-3 fs-5 mb-3">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
            <div className="small mb-1">
              <FaEnvelope className="me-2" />
              <strong>acadesiq@mail.com</strong>
            </div>
            <div className="small">
              <FaPhone className="me-2" />
              +1-202-555-0190
            </div>
          </div>

          {/* Information */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Information:</h6>
            <ul className="list-unstyled text-muted small">
              <li>About This Project</li>
              <li>Contact Us</li>
              <li>All Courses</li>
              <li>From the Blog</li>
              <li>Media Library</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Popular Courses:</h6>
            <ul className="list-unstyled text-muted small">
              <li>• Data Science Fundamentals CS with Python and SQL</li>
              <li>• AWS Certified Developer - Associate 2020</li>
              <li>• How to Draw From Beginner to Master</li>
            </ul>
          </div>

          {/* Unique Icons Section */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Connect:</h6>
            <div className="d-flex flex-wrap gap-3">
              <FaInstagram size={30} />
              <FaYoutube size={30} />
              <FaLinkedinIn size={30} />
              <AiFillCamera size={30} />
              <BsFillChatDotsFill size={30} />
              <FaPinterestP size={30} />
            </div>
          </div>
        </div>

        <div className="text-center mt-4 small text-muted">
          Copyright @ 2025 Edison by Merkulove
        </div>

        <div className="text-center mt-3">
          <MdKeyboardArrowUp size={24} />
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          background: #f6f1fc;
          color: #333;
        }

        .footer-section ul li {
          margin-bottom: 8px;
        }

        .footer-section svg {
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .footer-section svg:hover {
          color: #6c5ce7;
        }
      `}</style>
    </footer>
  );
}
