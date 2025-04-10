"use client";
import { FaSearch } from "react-icons/fa";
import Courses from "./coruses"; // Make sure filename is Courses.jsx/tsx
import SaleTestimonialSection from "./SaleTestimonialSection";

export default function AllCoursesHero() {
  return (
    <>
      <section className="all-courses-hero text-center py-5">
        <div className="container">
          <p className="text-muted mb-2">
            Home/ <span className="text-dark">All courses</span>
          </p>
          <h1 className="fw-bold display-5 mb-3 text-primary">
            Large selection of <br /> courses
          </h1>
          <p className="text-secondary mb-4">
            Donec accumsan, dolor ac malesuada rhoncus, leo arcu pellentesque dolor, nec tristique
            diam neque vitae sem. Nulla a lectus sollicitudin, volutpat lacus id, eleifend ipsum.
          </p>
          <div className="d-flex justify-content-center">
            <div className="search-box input-group rounded shadow" style={{ maxWidth: "500px" }}>
              <span className="input-group-text bg-white border-end-0">
                <FaSearch className="text-muted" />
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search for..."
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          .all-courses-hero {
            background: linear-gradient(to bottom right, #f4f0fc, #fdfcff);
          }

          .search-box input {
            border-left: none;
          }

          .search-box .input-group-text {
            background-color: white;
            border-right: none;
          }

          .search-box input:focus {
            box-shadow: none;
          }
        `}</style>
      </section>

      <Courses /> {/* Make sure the file and export match */}
      <SaleTestimonialSection />
    </>
  );
}
