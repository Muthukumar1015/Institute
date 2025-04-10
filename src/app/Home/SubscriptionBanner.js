import Image from 'next/image';

export default function SubscriptionBanner() {
  return (
    <section className="subscription-banner">
      <div className="container-fluid">
        <div className="row align-items-center position-relative z-1">
          {/* Left Side Content */}
          <div className="col-md-6 text-white p-5">
            <h2 className="fw-bold mb-4">
              Unlimited access to educational<br />
              materials and lectures for subscribers
            </h2>
            <button className="btn btn-warning fw-semibold rounded-pill px-4 py-2">
              SEE PRICING PLANS
            </button>
          </div>

          {/* Right Side Image */}
          <div className="col-md-6 d-none d-md-block position-relative">
            <Image
              src="/images/student-banner.webp" // Replace with your actual image file
              alt="Happy Student"
              width={700}
              height={450}
              className="banner-image"
              priority
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .subscription-banner {
          position: relative;
          background: linear-gradient(90deg, rgb(83, 37, 250), rgb(65, 127, 235));
          overflow: hidden;
        }

        .subscription-banner::before {
          content: "";
          position: absolute;
          top: -10%;
          right: -25%;
          width: 100%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(124, 43, 220, 0.9), transparent 70%);
          transform: scale(1.5);
          z-index: 0;
        }

        .banner-image {
          position: relative;
          z-index: 1;
        }

        h2, button {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </section>
  );
}
