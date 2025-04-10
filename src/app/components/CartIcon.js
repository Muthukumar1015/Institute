'use client';
import { useEffect, useRef, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const CartIcon = () => {
  const [itemCount] = useState(3);
  const iconRef = useRef(null);

  useEffect(() => {
    let currentTop = 50;

    const animate = () => {
      const targetTop = window.scrollY + window.innerHeight - 150;

      // Smooth slow animation
      currentTop += (targetTop - currentTop) * 0.05;

      if (iconRef.current) {
        iconRef.current.style.top = `${currentTop}px`;
      }

      requestAnimationFrame(animate);
    };

    animate(); // Start animation loop

  }, []);

  return (
    <>
      <div
        ref={iconRef}
        className="cart-icon-container"
      >
        <div className="cart-icon-wrapper">
          <div className="ripple-circle"></div>
          <div
            className="cart-icon text-white d-flex justify-content-center align-items-center position-relative"
            title="Go to cart"
          >
            <FiShoppingCart size={24} />
            {itemCount > 0 && <span className="item-count">{itemCount}</span>}
          </div>
        </div>
      </div>

      <style jsx>{`
        .cart-icon-container {
          position: absolute;
          right: 1.5rem;
          top: 50px;
          z-index: 1050;
        }

        .cart-icon-wrapper {
          position: relative;
          width: 60px;
          height: 60px;
        }

        .cart-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #3f51b5;
          z-index: 2;
          transition: transform 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .cart-icon:hover {
          transform: scale(1.1);
        }

        .ripple-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(63, 81, 181, 0.2), transparent 70%);
          border-radius: 50%;
          z-index: 1;
        }

        .item-count {
          position: absolute;
          top: -6px;
          right: -6px;
          background-color: #ff4b2b;
          color: #fff;
          font-size: 12px;
          padding: 2px 6px;
          border-radius: 999px;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default CartIcon;
