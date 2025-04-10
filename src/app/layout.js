// app/layout.js
import Navbar from '@/app/components/Navbar';
import CartIcon from '@/app/components/CartIcon'; // Import the cart icon
import Footer from '@/app/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata = {
  title: 'Deva Courses',
  description: 'Online learning platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <CartIcon />
        {children}
        <Footer /> {/* Imported footer added here */}
      </body>
    </html>
  );
}
