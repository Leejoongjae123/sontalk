import { GeistSans } from "geist/font/sans";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/css/footer.css";
import "../components/css/header.css";
import "../components/css/layout.css";
import "../components/css/main.css";
import "../components/css/reset.css";
import "../components/css/swiper.min.css";
import "remixicon/fonts/remixicon.css";
import { useRouter } from "next/navigation";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "손TOP",
  description: "복잡한 보험금 청구 합리적으로 더 받자",
  verification: {
    other: {
      "naver-site-verification": "35cb4ec58f7b96a38929c9fce3804bc282719988",
    },
  },
};

export default function RootLayout({ children,currentPath }) {
  // const router = useRouter();

  // 현재 경로가 /master로 시작하는지 확인합니다.
  // const showHeaderAndFooter = !router.pathname.startsWith("/master");
  console.log(currentPath)
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        {/* {showHeaderAndFooter && <Header />} */}
        <Header></Header>
        {children}
        {/* {showHeaderAndFooter && <Footer />} */}
        <Footer></Footer>
      </body>
    </html>
  );
}
