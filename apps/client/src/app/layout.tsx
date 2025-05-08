
import "./globals.css";
import logo from  "@/app/images/logo.svg";

import Image from "next/image";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-[#80ABEF] w-[242px] h-[832px]">
        <Image src={logo} alt="Logo" width={120} height={60} />
        </div>
        
        {children}
      </body>
    </html>
  );
}
