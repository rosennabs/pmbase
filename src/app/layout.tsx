
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';
import { AuthProvider } from '../contexts/AuthContext';
import { FormProvider } from '../contexts/FormContext';
import Footer from '../components/Footer';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="en">

      <body className="flex flex-col h-screen justify-between montserrat-light my-8 bg-off-white">
       
        <FormProvider>
        <AuthProvider>

            <Header />
            <div className="border-b-2 border-teal-600"></div>

            <main className="flex-grow">
              
            {children}
          </main>

            
            
            <footer className="w-full py-4 mt-32 bg-light-teal">
        <Footer />
              <p className="text-sm my-10 text-center mt-32">© 2024 HECBASE. All rights reserved.</p>
            </footer>

          </AuthProvider>
          </FormProvider>
      </body>
    </html>
  );
}
