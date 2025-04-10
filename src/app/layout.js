import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './globals.css';

import ReduxProvider from './Store/Provider'; // ✅ client wrapper
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CartIcon from '@/app/components/CartIcon';

export const metadata = {
  title: 'Deva Courses',
  description: 'Online learning platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          <CartIcon />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
