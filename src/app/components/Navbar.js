'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg border-bottom shadow-sm py-3 sticky-top ${
        scrolled ? 'navbar-scrolled' : 'bg-white'
      }`}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image
            src="/images/deva.png"
            alt="Company Logo"
            width={100}
            height={40}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-semibold">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
            <Link href="/AllCoursesHero" className="nav-link">
    All Courses
  </Link>

  <ul className="dropdown-menu">
    <li>
      <Link className="dropdown-item" href="/courses/web">
        Course Describition
      </Link>
    </li>
    {/* Add more dropdown items as needed */}
  </ul>
</li>

<li className="nav-item">
  <Link className="nav-link" href="/About">About Us</Link>
</li>

            <li className="nav-item">
              <Link className="nav-link" href="/Price">Prices</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Journal
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/journal/blog">Blog</Link></li>
                <li><Link className="dropdown-item" href="/journal/news">News</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Pages
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/faq">FAQ</Link></li>
                <li><Link className="dropdown-item" href="/terms">Terms</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
