import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get Me A Chai - Fund your project with chai",
  description: "This Website is a crowdfunding for creators",
  icons: {
    icon: '/icons/tea.png', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <SessionWrapper>

        <Navbar/>
        <div className="min-h-[90vh]  text-white">
        {children}
        </div>
        <Footer/>
        
        </SessionWrapper>
        </body>
    </html>
  );
}
