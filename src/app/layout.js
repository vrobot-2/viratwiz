import "./globals.css";
import Link from 'next/link';

export const metadata = {
  title: 'My Portfolio',
  description: 'A showcase of my photography and 3D modeling work',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <div>
          <div className="navbar bg-base-200">
            <div className="flex-1">
              <Link href="/" className="btn btn-ghost text-xl">My Portfolio</Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Me</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
              </ul>
            </div>
          </div>
          <main className="p-4">{children}</main>
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
              <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
          </footer>
        </div>
      </body>
    </html>
  );
}
