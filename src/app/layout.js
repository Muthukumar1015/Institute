// app/layout.js
import Navbar from '@/app/components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './globals.css'; // Optional: your custom global styles

export const metadata = {
  title: 'Deva Courses',
  description: 'Online learning platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
