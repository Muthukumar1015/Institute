"use client";

import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "@/app/Store/categorySlice";
import {
  FaCode,
  FaPaintBrush,
  FaChartBar,
  FaGamepad,
  FaBullhorn,
  FaLaptopCode,
} from "react-icons/fa";

const categories = [
  { id: "all", label: "all" },
  { id: "programming", label: "programming" },
  { id: "management", label: "management" },
  { id: "art", label: "art" },
  { id: "digital-marketing", label: "digital marketing" },
  { id: "game-dev", label: "game development" },
  { id: "smm", label: "smm" },
];

const allCourses = [
  { id: 1, title: "Software Engineering Fundamentals", icon: <FaCode />, category: "programming" },
  { id: 2, title: "Introduction to Java as a Second Language", icon: <FaLaptopCode />, category: "programming" },
  { id: 3, title: "Object Oriented Programming in Java", icon: <FaLaptopCode />, category: "programming" },
  { id: 4, title: "HTML, CSS, and JavaScript for Web Developers", icon: <FaCode />, category: "programming" },
  { id: 5, title: "Software Testing and Automation Course", icon: <FaLaptopCode />, category: "programming" },
  { id: 6, title: "Advanced Statistics for Data Science", icon: <FaChartBar />, category: "management" },
  { id: 7, title: "Digital Marketing Mastery", icon: <FaBullhorn />, category: "digital-marketing" },
  { id: 8, title: "Game Development Basics", icon: <FaGamepad />, category: "game-dev" },
  { id: 9, title: "Creative Art and Design", icon: <FaPaintBrush />, category: "art" },
];

export default function AllCourses() {
  const selectedCategory = useSelector((state) => state.category.selected);
  const dispatch = useDispatch();

  const filteredCourses =
    selectedCategory === "all"
      ? allCourses
      : allCourses.filter((course) => course.category === selectedCategory);

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Browse All Courses</h2>

      {/* Filter Buttons */}
      <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`btn text-capitalize ${
              selectedCategory === cat.id ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => dispatch(setCategory(cat.id))}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredCourses.map((course) => (
          <div key={course.id} className="col d-flex">
            <div className="card shadow-sm border-0 p-4 w-100 d-flex flex-column justify-content-between" style={{ minHeight: '100%' }}>
              <div>
                <div className="d-flex align-items-center mb-3 fs-2 text-primary">
                  {course.icon}
                </div>
                <h5 className="fw-bold">{course.title}</h5>
                <p className="small text-muted mb-2">48 lectures • 280 Hours</p>
                <div className="mb-3">$120 all course / $20 per month</div>
              </div>
              <button className="btn btn-outline-primary mt-auto w-100">
                SIGN UP FOR A COURSE →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
