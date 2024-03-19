import Drawer from './components/Drawer'



const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";


export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "손TOP",
  icons:{
    icon:'images/main/logo.png'
  },
  description: "복잡한 보험금 청구 합리적으로 더 받자",
  verification: {
    other: {
      "naver-site-verification": "35cb4ec58f7b96a38929c9fce3804bc282719988",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en">
      <body>
        <Drawer></Drawer>
        {children}
      </body>
    </html>
  );
}
