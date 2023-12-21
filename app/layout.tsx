import type { Metadata } from 'next'
import {useState} from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar/Navbar';
import LoginModal from './components/Modals/LoginModal';
import Footer from './components/Footer';
import ClientOnly from './components/ClientOnly';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IranMTA Shop',
  description: 'Created for Token purchase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <ClientOnly>
        <Navbar />
        <LoginModal />
        </ClientOnly>
         <div className='min-h-screen'> 
        {children}
         </div>
        <Footer />
        </body>
    </html>
  )
}
