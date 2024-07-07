import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

// Local fonts
const pryFont = localFont({
  src: "../Satoshi-Variable.ttf",
  display: "swap",
});

const secFont = localFont({
  src: "../Amug-Regular.ttf",
  display: "swap",
});

// Google font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={pryFont.className}>{children}</body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pryFont.className}>
        <div className={inter.className}></div>
        <div className={secFont.className}></div>
        <div className={pryFont.className}></div>
        {children}
      </body>
    </html>
  );
}
