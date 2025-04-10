'use client';

import React from 'react';
import { FaCode, FaHtml5, FaLaptopCode } from 'react-icons/fa';

const courseData = [
  {
    id: 1,
    title: 'Computer Programming Basic',
    icon: <FaCode size={22} color="#fff" />,
    iconBg: 'bg-gradient-purple',
    rating: 5,
    author: 'by Adrian Dawson school',
    lectures: '48 lectures (280 Hours)',
    price: '$120 all course / $20 per month',
    features: [
      'Mauris tellus lorem, tempus sed nibh at, varius convallis mi',
      'Aenean sodales enim, et consequat velit. Morbi sit amet lorem sapien',
    ],
  },
  {
    id: 2,
    title: 'Computer CSS3 Programming',
    icon: <FaHtml5 size={22} color="#fff" />,
    iconBg: 'bg-gradient-orange',
    rating: 5,
    author: 'by Adrian Dawson school',
    lectures: '48 lectures (280 Hours)',
    price: '$120 all course / $20 per month',
    features: [
      'Mauris tellus lorem, tempus sed nibh at, varius convallis mi',
      'Aenean sodales enim, et consequat velit. Morbi sit amet lorem sapien',
    ],
  },
  {
    id: 3,
    title: 'Web-site Development Pro',
    icon: <FaLaptopCode size={22} color="#fff" />,
    iconBg: 'bg-gradient-blue',
    rating: 5,
    author: 'by Adrian Dawson school',
    lectures: '48 lectures (280 Hours)',
    price: '$120 all course / $20 per month',
    features: [
      'Mauris tellus lorem, tempus sed nibh at, varius convallis mi',
      'Aenean sodales enim, et consequat velit. Morbi sit amet lorem sapien',
    ],
  },
];

const PopularCourses = () => {
  return (
    <div className="popular-courses-wrapper">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold fs-3 fs-md-2">Popular courses</h2>
          <p className="text-muted">
            Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Fusce faucibus nulla sed finibus egestas.
            Vestibulum purus magna.
          </p>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-4">
          {courseData.map(course => (
            <div key={course.id} className="custom-card text-start">
              <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center mb-3">
                <div className={`icon-box ${course.iconBg}`}>
                  {course.icon}
                </div>
                <div className="ms-0 ms-md-3 mt-2 mt-md-0">
                  <h6 className="mb-1 fw-bold">{course.title}</h6>
                  <div className="text-warning small">
                    {'★'.repeat(course.rating)}<span className="text-muted">{'☆'.repeat(5 - course.rating)}</span>
                  </div>
                  <small className="text-muted d-block">{course.author}</small>
                  <small className="text-primary fw-semibold">{course.lectures}</small>
                </div>
              </div>

              <div className="price-box text-center fw-semibold text-dark">
                {course.price}
              </div>

              <ul className="mt-3 ps-3">
                {course.features.map((feat, idx) => (
                  <li key={idx} className="small text-muted">{feat}</li>
                ))}
              </ul>

              <div className="text-center mt-auto">
                <button className="btn btn-outline-primary mt-4 w-100 rounded-3">
                  SIGN UP FOR A COURSE →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="learn-more-btn">LEARN MORE</button>
        </div>
      </div>

      <style jsx>{`
        .popular-courses-wrapper {
          background: linear-gradient(90deg, rgb(219, 198, 248), rgb(217, 230, 253));
          padding: 60px 20px;
        }
        .custom-card {
          background: #fff;
          width: 100%;
          max-width: 280px;
          border-radius: 16px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bg-gradient-purple {
          background: linear-gradient(to right, #6a11cb, #2575fc);
        }
        .bg-gradient-orange {
          background: linear-gradient(to right, #f7971e, #ffd200);
        }
        .bg-gradient-blue {
          background: linear-gradient(to right, #396afc, #2948ff);
        }
        .price-box {
          background: #e9f0ff;
          padding: 10px;
          border-radius: 6px;
          font-size: 15px;
        }
        .learn-more-btn {
          padding: 10px 30px;
          background: linear-gradient(to right, #fc466b, #3f5efb);
          color: #fff;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          transition: 0.3s;
        }
        .learn-more-btn:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default PopularCourses;
