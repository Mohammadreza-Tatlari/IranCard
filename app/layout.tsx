import type { Metadata } from 'next'
import {useState} from 'react'
import localFont from 'next/font/local'
import './globals.css'
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar/Navbar';
import LoginModal from './components/Modals/LoginModal';
import Footer from './components/Footer';
import ClientOnly from './components/ClientOnly';

const Inter = localFont({
  src: [
    {
      path:'../public/fonts/Inter-Regular.ttf',
      weight: '400',
      style: "normal"
    },
    {
      path:'../public/fonts/Inter-Bold.ttf',
      weight: '700',
      style: "bold"
    },
    {
      path:'../public/fonts/Inter-Light.ttf',
      weight: '300',
      style: "light"
    },
    {
      path:'../public/fonts/Inter-Medium.ttf',
      weight: '500',
      style: "normal"
    },
  ]
})

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
      <body className={Inter.className}>
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
