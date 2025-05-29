import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  // Don't render public header/footer for admin routes
  const isAdmin = async () => {
    const headerList = headers();

    const fullList =
      (await headerList.get("x-url")) || headerList.get("referer") || "";

    if (!fullList.includes("admin")) {
      return true;
    }

    return false;
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 transition-colors duration-300`}
      >
        {isAdmin ? (
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
