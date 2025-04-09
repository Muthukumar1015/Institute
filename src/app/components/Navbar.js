'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm py-3">
      <div className="container">
        {/* Just the logo */}
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image
            src="/images/deva.png" // keep this in your public folder
            alt="Company Logo"
            width={100}
            height={50}
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
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                All Courses
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/courses/web">Web Development</Link></li>
                <li><Link className="dropdown-item" href="/courses/uiux">UI/UX Design</Link></li>
                <li><Link className="dropdown-item" href="/courses/python">Python</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/pricing">Prices</Link>
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
