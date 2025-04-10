"use client";
import { FaGraduationCap, FaGlobe, FaHeadphones } from "react-icons/fa";

const features = [
  {
    icon: <FaGraduationCap size={28} />,
    title: "Get a certificate",
    description:
      "Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem tempus rhoncus sit tortor.",
  },
  {
    icon: <FaGlobe size={28} />,
    title: "All over the globe",
    description:
      "Donec urna massa, cursus venenatis ipsum et, tempus rhoncus tortor. Lorem ipsum dolor.",
  },
  {
    icon: <FaHeadphones size={28} />,
    title: "Live online lectures",
    description:
      "Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem ipsum dolor sit lorem amet.",
  },
];

const FeatureCard = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(90deg, rgb(219, 198, 248), rgb(217, 230, 253))",
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="feature-card text-center p-4 rounded-4 shadow-sm">
                <div className="icon-box mx-auto mb-3">{feature.icon}</div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p className="mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .feature-card {
          background: #ffffff;
          transition: all 0.4s ease-in-out;
          color: #333;
        }

        .feature-card .icon-box {
          background: linear-gradient(135deg,rgb(114, 47, 239),rgb(91, 114, 244));
          color: white;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          transition: all 0.4s ease;
        }

        .feature-card:hover {
          background: linear-gradient(135deg, #6f42c1, #3f51b5);
          color: white;
        }

        .feature-card:hover .icon-box {
          background: #ffffff;
          color: #3f51b5;
        }

        .feature-card h5,
        .feature-card p {
          transition: all 0.4s ease;
        }
      `}</style>
    </section>
  );
};

export default FeatureCard;
