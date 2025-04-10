// app/not-found.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
      <Image
        src="/images/404-books.png"
        alt="404 Not Found"
        width={600}
        height={400}
        className="img-fluid mb-4"
        priority
      />
      <h1 className="display-4 fw-bold text-dark mb-3">Oops! Page Not Found</h1>
      <p className="text-secondary mb-4">
        The page you're looking for doesn’t exist or may have been moved.
      </p>
      <Link href="/" className="btn btn-primary px-4 py-2">
        Go to Homepage
      </Link>
    </div>
  );
}
