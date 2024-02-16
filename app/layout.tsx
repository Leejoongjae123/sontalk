import { GeistSans } from "geist/font/sans";
import Header from '../components/Header'
import '../components/css/footer.css'
import '../components/css/header.css'
import '../components/css/layout.css';
import '../components/css/main.css';
import '../components/css/reset.css';
import '../components/css/swiper.min.css';



const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
          <Header></Header>
          {children}
      </body>
    </html>
  );
}
